// Script executado pelo Netlify no build
// Lê as variáveis de ambiente e gera o config.js com elas
// O config.js NÃO é commitado no GitHub — fica apenas no servidor do Netlify

const fs = require('fs');

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️  SUPABASE_URL ou SUPABASE_KEY não definidos nas variáveis de ambiente do Netlify.');
}

const content = `// Arquivo gerado automaticamente no build — não editar
window.__ENV__ = {
  SUPABASE_URL: "${supabaseUrl}",
  SUPABASE_KEY: "${supabaseKey}"
};
`;

fs.writeFileSync('config.js', content);
console.log('✅ config.js gerado com sucesso.');
