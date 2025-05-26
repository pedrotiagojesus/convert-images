# 🖼️ Conversor de Imagens

Frontend de uma aplicação web que permite converter imagens para diversos formatos, incluindo formatos raster (JPEG, PNG, WEBP, TIFF, AVIF). Ideal para quem precisa converter múltiplas imagens de forma simples e rápida.

## 🚀 Funcionalidades

- Envio de várias imagens de uma vez
- Seleção do formato de saída: `jpeg`, `png`, `webp`, `tiff`, `avif`
- Conversão de imagens raster
- Download automático num ficheiro `.zip`
- Interface moderna e responsiva com Bootstrap

## 📦 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Scripts](https://www.npmjs.com/package/react-scripts)


## ⚙️ Como executar localmente

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clona o repositório:

```bash
git clone https://github.com/teu-usuario/image-converter-frontend.git
cd image-converter-frontend
```

2. Instala as dependências:

```bash
npm install
```

3. Cria um ficheiro `.env` com o endpoint da API de conversão:

```bash
REACT_APP_CONVERT_ENDPOINT=http://localhost:3001/api/convert
```

4. Inicia o projeto:

```bash
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000`.

## 📝 Licença
Este projeto está licenciado sob a MIT License.