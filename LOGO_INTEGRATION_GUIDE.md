# 🎯 Guia - Integração de Logos Oficiais do AstraMind

## 📍 Localização dos Placeholders

Os logos placeholders foram criados em:
```
public/assets/
├── logo-astramind-blue.png   (Logo azul - usar em temas claros)
└── logo-astramind-white.png     (Logo branco - usar em temas escuros)
```

---

## 🔄 Como Substituir os Logos

### 1. **Logo Azul** (`logo-blue.svg`)
Onde é usado:
- Header mobile (topo centralizado)
- Sidebar desktop
- Favicon
- Páginas principais

**Para substituir:**
```bash
# Copie seu logo azul oficial para:
cp seu-logo-azul.svg public/assets/logo-blue.svg

# Ou se for PNG/JPG, converta para SVG primeiro
# Ou atualize o caminho em MainLayout.tsx e Sidebar.tsx
```

**Arquivos que usam:**
- `src/layouts/MainLayout.tsx` - Linha com `src="/assets/logo-blue.svg"`
- `src/components/Sidebar.tsx` - Linha com `src="/assets/logo-blue.svg"`

### 2. **Logo Branco** (`logo-white.svg`)
Onde será usado:
- Splash screen (futura)
- Fundos escuros
- Marca d'água discreta
- Tela de loading

**Para substituir:**
```bash
cp seu-logo-branco.svg public/assets/logo-white.svg
```

---

## 🛠️ Especificações Técnicas

### Requisitos dos SVGs:
- ✅ Formato SVG otimizado
- ✅ ViewBox configurado (ex: `viewBox="0 0 256 256"`)
- ✅ Sem cor de fundo (transparente)
- ✅ Dimensões quadradas ou 16:9

### Tamanhos onde aparecem:
```
Header Mobile: h-5 w-5 (20px × 20px)
Sidebar: h-7 w-7 (28px × 28px)
Favicon: 32px × 32px
```

---

## 📝 Código Relevante

### Em `MainLayout.tsx` (Header Mobile):
```jsx
<img
  src="/assets/logo-astramind-blue.png"
  alt="AstraMind"
  className="h-5 w-5"
  onError={(e) => {
    ;(e.target as HTMLImageElement).style.display = 'none'
  }}
/>
```

### Em `Sidebar.tsx`:
```jsx
<img
  src="/assets/logo-astramind-blue.png"
  alt="AstraMind Logo"
  className="h-7 w-7"
  onError={(e) => {
    ;(e.target as HTMLImageElement).style.display = 'none'
  }}
/>
```

**Nota:** O `onError` mostra um fallback (ícone Sparkles) se a imagem não carregar.

---

## 🎨 Alternativas de Uso

### Se usar PNG em vez de SVG:

**1. Copie para `public/`:**
```
public/
├── astramind-logo-blue.png
└── astramind-logo-white.png
```

**2. Atualize os caminhos:**
```jsx
// Em vez de:
src="/assets/logo-bluelogo-astramind-blue.png.svg"

// Use:
src="/astramind-logo-blue.png"
```

### Se usar em Favicon:

**1. Crie favicon a partir do logo azul (32px)**

**2. Adicione ao `index.html`:**
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" href="/favicon.png" />
```

---

## ✅ Checklist de Implementação

- [ ] Obter logos oficiais em formato SVG ou PNG
- [ ] Fazer backup dos placeholders
- [ ] Substituir `logo-astramind-blue.png`
- [ ] Substituir `logo-astramind-white.png` (opcional)
- [ ] Criar favicon (opcional)
- [ ] Testar em mobile (375px)
- [ ] Testar em tablet (768px)
- [ ] Testar em desktop (1440px)
- [ ] Verificar fallback se logo não carregar
- [ ] Validar cores e proporções

---

## 🚀 Deploy

Após substituir os logos:

```bash
# Compile o projeto
npm run build

# Verifique que os assets estão inclusos em dist/
ls dist/assets/

# Deploy como usual
npm run preview  # Para testar antes do deploy
```

---

## 💬 Troubleshooting

### Logo não aparece?
1. Verifique caminho: `public/assets/logo-blue.svg`
2. Verifique permissões do arquivo
3. Limpe cache do navegador (Ctrl+Shift+R)
4. Verifique console do navegador (F12) para erros

### Fallback aparece em vez da logo?
1. O arquivo pode estar com erro de SVG
2. Validar SVG em https://www.w3.org/SVG/validator.html
3. Verificar viewBox do SVG

### Cores erradas?
1. Ensure logo SVG não tem cores hardcoded conflitantes
2. Se necessário, ajuste via CSS classes

---

## 📞 Suporte

Dúvidas sobre:
- **SVG**: Consulte https://developer.mozilla.org/pt-BR/docs/Web/SVG
- **Favicon**: Consulte https://favicon.io/
- **Imagens responsivas**: Consulte documentação Tailwind CSS

---

**Última atualização**: 10 de maio de 2026
