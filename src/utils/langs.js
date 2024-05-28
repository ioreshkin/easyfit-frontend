const en = {
    //navigation
    programs: "",
    exercises: "",
    help: "",
    about: "",

    //help
    faq: "",
    title1: "",
    text1: "",
    title2: "",
    text2: "",
    title3: "",
    text3: "",
    list1: "",
    list2: "",
    list3: "",
    list4: "",
    list5: "",
    title4: "",
    text4: "",
    contactUs: "",
    ourContacts: "",
    link: "",
    guide: "",

    //footer
    contacts: "",

    //mainPage
    train : "",
    forGym : "",
    forGymText1: "",
    forGymText2: "",
    forGymText3: "",
    forHome : "",
    forHomeText1: "",
    forHomeText2: "",
    forHomeText3: "",
    anyTime: "",
    anyDevices: "",
    startTraining: "",

    //exercisesPage
    musculeGroup: "",
    chset: "",
    legs: "",
    abs: "",
    hands: "",
    back: "",

    //aboutPage

}

const ru = {
    //navigation
    programs: "Программы",
    exercises: "Упражнения",
    help: "Помощь",
    about: "О нас",

    //help
    faq: "Частые вопросы (FAQ)",
    title1: "Сайт внезапно перестал отвечать или закрылся, можно ли вернуться к тренировке на том же моменте?",
    text1: "К сожалению, у нас пока не предусмотрен личный кабинет пользователя, а значит, ваш процесс не сохраняется. Вы можете заново открыть то же упражнение и перемотать на нужный отрезок времени.",
    title2: "Подходят ли программы тренировок для новичков?",
    text2: "Да, большинство наших программ построены по принципу увеличивающейся нагрузки. К тому же все тренировки имеют значок сложности, чтобы пользователь оценил справится он или нет.",
    title3: "Какие направления тренировок я могу выбрать?",
    text3: "Наш сайт предлагает множество направлений тренировок, к примеру:",
    list1: "йога;",
    list2: "пилатес;",
    list3: "кроссфит;",
    list4: "кардио;",
    list5: "силовые тренировки.",
    title4: "Какой инвентарь необходим?",
    text4: "Каждое направление есть с инвентарём и без. Специально, чтобы был выбор. Также большое количество тренировок сделано с подручными средствами для удобства использования в домашних условиях.",
    contactUs: "Если вы не нашли ответа на свой вопрос, пожалуйста, свяжитесь с нами.",
    ourContacts: "Наши контакты: +79024716514, example@mail.ru.",
    link: "Ссылка на полное руководство пользователя:",
    guide: "Руководство пользователя",

    //footer
    contacts: "Контакты",

    //mainPage
    train : "Трннируйтесь с нами",
    forGym : "Для зала",
    forGymText1: "Стэп-аэробика",
    forGymText2: "Body Sculp",
    forGymText3: "Body Pump",
    forHome : "Для дома",
    forHomeText1: "Кроссфит",
    forHomeText2: "Стретчинг",
    forHomeText3: "Калланетика",
    anytime: "Занимайся в любое время, в любом месте",
    anyDevices: "Доступно на любых устройствах",
    startTraining: "Начать тренироваться",

    //exercisesPage
    musculeGroup: "Группы мышц:",
    chset: "Грудь",
    legs: "Ноги",
    abs: "Пресс",
    hands: "Руки",
    back: "Спина",

    //aboutPage

}

export const getLang = (code) => {
    switch(code) {
        case "ru": return ru;
        case "en": return en;
    }
}