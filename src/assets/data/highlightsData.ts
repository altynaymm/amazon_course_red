export type ModalDataItem = {
    title: string;
    text: string;
  };
  
export type ModalDataType = {
    [key in 'qaSessionContent' | 'productListContent' | 'supplierContactsContent' | 'groupCallsContent' | 'logisticsContactsContent']: ModalDataItem;
};

export const modalData:ModalDataType = {

    qaSessionContent: {
        title: 'Q&A сессия и чат со мной',
        text: 'Встретимся в зуме, чтобы порефлексировать на темы из видеоуроков. Я отвечу на все ваши вопросы, дам советы, которые мне помогали, и поддержу, если это будет вам необходимо. Вся сессия будет длиться около 1,5 часов, но если вопросы останутся, их всегда можно будет задать в отдельном чате со мной'
    },

    productListContent: {
        title: 'Список товаров',
        text: '95% успеха бизнеса на маркетплейсах - это правильный товар. Поэтому мы собрали большую таблицу из товаров, которые вы можете продавать и быть уверены в том, что они будут продаваться'
    },

    supplierContactsContent: {
        title: 'Контакты поставщиков',
        text: 'Отправим контакты всех поставщиков, с которыми мы работаем. 100% гарантия качества товаров'
    },

    groupCallsContent: {
        title: 'Групповые видеозвонки',
        text: 'Встретимся в зуме все вместе и будем решать ваши проблемы'
    },

    logisticsContactsContent: {
        title: "Контакты логистов",
        text: 'Отправим контакты всех логистов, с которыми мы работаем. И с уверенностью можем сказать, что товары будут доставлены в срок и без форс-мажора'
    }
}

