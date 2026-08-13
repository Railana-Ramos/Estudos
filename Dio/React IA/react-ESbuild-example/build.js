const esbuild = require('esbuild');

async function run() {
  const ctx = await esbuild.context({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    loader: { '.js': 'jsx' },
    minify: true,
  });

// 👁️ ATIVA O MODO WATCH (Observa mudanças nos arquivos)
  await ctx.watch();

  // Inicia o servidor servindo a pasta 'dist' na porta 8000
  const { host, port } = await ctx.serve({
    servedir: 'dist',
    port: 8000,
  });

  // Usa 'localhost' caso o host venha undefined
  const serverHost = host === '0.0.0.0' || !host ? 'localhost' : host;

  console.log(`🚀 Servidor rodando em http://${serverHost}:${port}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});