# 📊 Dashboard de Vendas Editor de Vídeo

Dashboard web para controle de vendas e faturamento, desenvolvido para editores de vídeo freelancers.

![Preview](https://img.shields.io/badge/status-online-00e5a0?style=flat-square)
![Tech](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20Supabase-5b8dee?style=flat-square)
![Deploy](https://img.shields.io/badge/deploy-Netlify-00ad9f?style=flat-square)

---

## ✨ Funcionalidades

- **Dashboard** com KPIs em tempo real: projetos, faturamento, ticket médio e tempo médio
- **Controle de pagamentos**: separa o que já foi recebido do que está pendente
- **Gráfico** de receitas por dia com visualização de pago vs pendente
- **Nova Venda**: registro com cliente, tipo de vídeo, quantidade, tempo de produção e valor
- **Lançamento em lote**: registra múltiplos vídeos do mesmo cliente de uma vez
- **Duplicar projeto**: copia um projeto existente N vezes com um clique
- **Histórico** com filtros por status e tipo de vídeo
- **Responsivo**: sidebar no desktop, bottom navigation no mobile
- **PWA**: instalável como app no celular

---

## 🛠️ Stack

| Tecnologia | Uso |
|---|---|
| HTML + CSS + JS vanilla | Frontend completo, sem frameworks |
| [Supabase](https://supabase.com) | Banco de dados PostgreSQL na nuvem |
| [Netlify](https://netlify.com) | Hospedagem e variáveis de ambiente |
| PWA (Service Worker + Manifest) | Instalação como app mobile |

---

## 🚀 Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/dashboard-vendas.git
cd dashboard-vendas
```

2. Crie um arquivo `config.js` na raiz com suas credenciais do Supabase:
```js
window.__ENV__ = {
  SUPABASE_URL: "https://seu-projeto.supabase.co",
  SUPABASE_KEY: "sua-chave-publica"
};
```

3. Abra o `index.html` em qualquer servidor local (ex: Live Server no VS Code)

> ⚠️ O arquivo `config.js` está no `.gitignore` — nunca suba suas chaves no GitHub.

---

## ☁️ Deploy no Netlify

1. Faça fork ou importe este repositório no [Netlify](https://netlify.com)
2. Em **Site Settings → Environment Variables**, adicione:
   - `SUPABASE_URL` → URL do seu projeto Supabase
   - `SUPABASE_KEY` → Chave pública (anon key)
3. O build roda `generate-config.js` que cria o `config.js` automaticamente no servidor

---

## 🗄️ Banco de Dados

Execute o SQL abaixo no **Supabase SQL Editor** para criar a tabela:

```sql
create table if not exists vendas (
  id        bigserial primary key,
  cliente   text not null,
  tipo      text,
  horas     integer default 0,
  minutos   integer default 0,
  valor     numeric(10,2) not null,
  status    text default 'pendente',
  data      date default current_date,
  criado_em timestamptz default now()
);

alter table vendas enable row level security;

create policy "acesso_total" on vendas
  for all using (true) with check (true);
```

---

## 📁 Estrutura do projeto

```
dashboard-vendas/
├── index.html          # App completo (frontend)
├── manifest.json       # Configuração PWA
├── sw.js               # Service Worker (offline)
├── generate-config.js  # Script de build (Netlify)
├── netlify.toml        # Configuração do Netlify
├── icon-192.png        # Ícone do app
├── icon-512.png        # Ícone do app (grande)
├── .gitignore          # Ignora config.js e node_modules
└── README.md           # Este arquivo
```

---

## 📄 Licença

MIT — sinta-se livre para usar e adaptar.
