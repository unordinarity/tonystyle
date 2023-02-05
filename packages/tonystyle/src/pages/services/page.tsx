import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

const Services: FunctionComponent = () => (
  <>
    <HeadTemplate title='Services' />
    <PageTemplate>
      <h1>Услуги</h1>

      <section>
        <h2>Проектная работа</h2>
        <p>Для команд и компаний</p>

        <h3>Становление</h3>
        <ul>
          <li>Анализ бизнес-кейсов и поиск подходящих технических решений</li>
          <li>Настройка интеграции с бэкендом, в том числе с командой бэкенда</li>
          <li>Создание пайплайнов сборки, тестирования</li>
        </ul>

        <h3>Развитие и рефакторинг</h3>
        <ul>
          <li>Ревью существующей кодовой базы</li>
          <li>План доработки архитектуры</li>
          <li>Переезд на новые инструменты</li>
          <li>Поиск и решение бутылочных горлышек производительности</li>
        </ul>

        <h3>Масштабирование</h3>
        <p>Подготовка проекта к расширению команды и увеличению требований</p>
        <ul>
          <li>Покрытие тестами</li>
          <li>Составление документации</li>
          <li>Интеграция команд разработки</li>
          <li>Распределение обязанностей</li>
        </ul>
      </section>

      <section>
        <h2>Менторство</h2>
        <p>Для братьев и сестёр в айти</p>

        <ul>
          <li>Ревью петпроектов и тестовых заданий</li>
          <li>Составление и доработка резюме</li>
        </ul>
      </section>
    </PageTemplate>
  </>
)

export default Services
