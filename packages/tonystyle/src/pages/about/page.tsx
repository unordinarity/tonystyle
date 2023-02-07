import React, { FunctionComponent } from 'react'

import { HeadTemplate } from 'src/widgets/head-template'
import { PageTemplate } from 'src/widgets/page-template'

const AboutPage: FunctionComponent = () => (
  <>
    <HeadTemplate title='About me' />
    <PageTemplate>
      <h1>About me</h1>

      <p>Антон Медведев, 24 года, рокстар-фронтендер, Санкт-Петербург</p>

      <h2>Прошлое</h2>

      <p>Собрал первую игру на GameMaker в 9 лет</p>
      <p>В школьные времена изучал C, C++, Java и геймдев</p>
      <p>Из одного университета был отчислен, второй бросил сам</p>

      <h2>Настоящее</h2>

      <p>Живу в Санкт-Петербурге</p>
      <p>Работаю фронтенд-архитектором</p>
      <p>Изучаю систем дизайн и процессы разработки</p>
      <p>Пишу OSS проекты (посмотреть можно здесь)</p>
      <p>Консультирую компании и отдельных разработчиков (подробнее)</p>
      <p>Продвигаю идеи Rockstar Development</p>

      <h2>Будущее</h2>

      <p>Изучу дизайн, бэкенд и iOS разработку</p>
      <p>Монетизирую свои OSS проекты</p>
      <p>Напишу несколько полезных докладов и гайдов</p>
      <p>Открою самую хипстерскую кофейню с самым хипстерским кофе</p>
    </PageTemplate>
  </>
)

export default AboutPage
