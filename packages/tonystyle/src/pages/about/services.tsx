import React, { FunctionComponent } from 'react'

import { Template } from 'src/widgets/template'
import { HelmetCommon } from 'src/widgets/helmet-common'

const Services: FunctionComponent = () => (
  <Template>
    <HelmetCommon />
    <h1>Услуги</h1>

    <h2>Становление</h2>
    <p>Разворачивание проекта на самом старте</p>
    <ul>
      <p>Установка правил для команды</p>
      <p>Создание пайплайна сборки</p>
    </ul>

    <h2>Рефакторинг</h2>
    <ul>
      <li>Переезд на новые фреймворки</li>
      <li>Ремонт кодовой базы</li>
    </ul>

    <h2>Масштабирование</h2>
    <p>Подготовка к работе с несколькими командами</p>
    <ul>
      <li>Покрытие тестами</li>
      <li>Составление документации</li>
    </ul>

    <h2>Консалтинг</h2>
    <p>Решение проблемных моментов</p>
  </Template>
)

export default Services
