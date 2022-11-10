import React, { FunctionComponent } from 'react'

import { HelmetCommon } from 'src/widgets/helmet-common'
import { PageTemplate } from 'src/widgets/page-template'

export const AboutMe: FunctionComponent = () => (
  <PageTemplate>
      <HelmetCommon title='About me' />

      <h1>About me</h1>

      <h2>Прошлое</h2>

      <p>Увлекаюсь геймдизайном</p>
      <p>Собрал первую игру в 9 лет, написал первые строчки кода в 11</p>
      <p>Ломал отцовский компьютер несчётное количество раз</p>
      <p>Много катался на велосипеде</p>
      <p>Три сезона подряд не слезал с велосипеда</p>
      <p>Личный рекорд - 80км за день</p>
      <p>Из одного университета был отчислен, второй бросил сам</p>

      <h2>Настоящее</h2>

      <p>Живу в Санкт-Петербурге</p>
      <p>Rockstar developer</p>
      <p>Получаю искренне удовольствие от чтения и написания хорошего кода</p>

      <h2>Будущее</h2>

      <p>Дизайн</p>
      <p>Опенсорс разработка</p>
  </PageTemplate>
)
