import { NestFactory } from "@nestjs/core";

class AppModule { }
const app = await NestFactory.createApplicationContext(AppModule);
