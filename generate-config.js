const fs = require('fs');

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_KEY || '';

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('__SUPABASE_URL__', url);
html = html.replace('__SUPABASE_KEY__', key);
fs.writeFileSync('index.html', html);

console.log('✅ index.html atualizado com sucesso.');
