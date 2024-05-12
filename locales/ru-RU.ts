export default {
  meta: {
    title: 'Позиции от WotStat',
    description: 'Мод для World of Tanks, который показывает эффективные позиции в бою. От разработчиков сервиса WotStat',
  },
  main: {
    title: 'Позиции от WotStat',
    description: 'Уникальные и эффективные позиции для нанесения урона в играх «World of Tanks» и «Мир Танков».\nНа основе анализа тепловых карт лучших 5% игроков на каждом танке',
  },
  activation: {
    status: {
      wait: 'Ожидание клиента',
      connected: 'Соединение установлено',
      disconnected: 'Соединение разорвано',
    },
    page: {
      title: 'Активация лицензии',
      description: 'Для активации лицензии вам необходим <b>лицензионный ключ</b> или <b>промо-код</b>.<br>Лицензионный ключ стоит <b>100 рублей в месяц</b>. Вы можете <a href="https://boosty.to/wotstat" target="_blank">купить</a> лицензию на моём Boosty.',
      keyPlaceholder: 'Введите ключ',
      activate: 'Активировать',
      copy: 'Скопировать',
      goodLuck: 'Удачных боёв!',
      tryAnotherKey: 'Попробовать другой код',
      successDescription: 'Вы успешно активировали лицензию мода "Позиции от WotStat", теперь вы можете убедиться в успешной активации, в центре уведомлений отобразилось сообщений с информацией о лицензии<br><br>Удачных боёв!',
      expiredDescription: 'Срок действия этого лицензионного ключа истёк. Вы можете приобрести новый ключ',
      promoSuccessDescription: 'Одноразовый промо-ключ успешно активирован. Обязательно сохраните лицензионный ключ, он потребуется для следующих активаций',
      promoWotLost: 'Одноразовый промо-код успешно активирован, однако во время активации была потеряна связь с клиентом игры. <b>Повторите активацию с использованием лицензионного ключа</b><br>Обязательно сохраните лицензионный ключ, он потребуется для следующих активаций',
      wotLostDescription: 'Соединение с клиентом прервано. Попробуйте запустить процесс активации ещё раз. Клиент игры должен быть запущен',
      disconnectedDescription: 'Соединение с сервером прервано. Попробуйте запустить процесс активации ещё раз',
      incorrectDescription: 'Такого ключа не существует или его срок лицензии уже истёк. Убедитесь, что вводите верный ключ.',
      promoAlreadyActivatedDescription: 'Этот код уже был активирован ранее. Если это Вы активировали его раньше, то вам был предоставлен лицензионный ключ, для повторной активации следует использовать его',
      youTryToActivateLicense: 'Вы пытались активировать ключ:',
      youTryToActivatePromo: 'Вы пытались активировать промо-код:',
    },
    result: {
      success: 'Ваша лицензия активирована',
      expired: 'Лицензия истекла',
      promo: 'Лицензия сгенерирована',
      promoAlreadyActivated: 'Уже активирован',
      incorrect: 'Неверный ключ',
    }
  }
}