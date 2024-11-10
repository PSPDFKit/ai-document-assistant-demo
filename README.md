# 🤖 AI Assistant for PSPDFKit Demo

This project demonstrates the functionality of PSPDFKit AI Assistant. The AI-powered assistant enhances PDF document workflows by offering intelligent document analysis and interaction, leveraging PSPDFKit for seamless PDF handling and processing.

## Setup

### Requirements

- [Docker Compose version 3.8+](https://docs.docker.com/compose/install/)
- [Node version 20+](https://nodejs.org/en)
- [OpenAI API Key](https://openai.com/api/)

### Getting Started

Clone this repository to a folder on your computer and then run these commands in your terminal:

```shell
export OPENAI_API_KEY="your-openai-api-key"
docker-compose up -d
```

When the AI Assistant is ready to use, you will see `info: AI Assistant started -` in the `ai-assistant` container logs. Then, run this command in your terminal to start the sample AI Assistant web application:

```shell
./start
```

Head over to URL listed on the command line, where you'll see a PDF loaded in PSPDFKit for Web, our document viewer. Click on the AI Assistant toolbar icon (star) to start interacting with your document in an entirely new way, using natural language commands.

![Screenshot-of-PSPDFKit-AI-Document-Assistant](assets/AI-Assistant-overview.png)

## Contact Us

Excited about the possibilities of this new technology? [Contact us](https://pspdfkit.com/sales/form) to discuss how you can integrate it into your workflows and purchase a license after evaluation.
