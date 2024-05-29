import ruImg from "../images/ru.png";
import enImg from "../images/en.png";

const en = {
    //navigation
    programs: "Programmes",
    exercises: "Exercises",
    help: "Help",
    about: "About us",
    img: enImg,

    //help
    faq: "FAQ",
    title1: "The website suddenly stopped responding or closed, is it possible to return to the exercise in the programme I was on?",
    text1: "Unfortunately, we do not yet provide a user account, which means your progress is not saved, but we are working on it. Currently you can reopen the tab and click on the exercise you need.",
    title2: "Are the training programmes suitable for beginners?",
    text2: "Yes, most of our programmes are made based on the principle of increasing difficulty. In addition, when picking a work-out you may pick the ones, which are marked with easy level.",
    title3: "What types of training programmes can I choose?",
    text3: "Our website offers many training areas, such as:",
    list1: "yoga;",
    list2: "pilates;",
    list3: "crossfit;",
    list4: "cardio;",
    list5: "power trainings.",
    title4: "What equipment is needed?",
    text4: "Each training area is available with and without equipment. You can choose on your own. Also, some workouts present are made with tools available at home.",
    contactUs: "If you haven't found answer to your question, please contact us.",
    ourContacts: "Our contacts:+79024716514, example@mail.ru.",
    link: "Link to full User Manual:",
    guide: "",

    //footer
    contacts: "Our contacts:",

    //mainPage
    train : "train with us",
    forGym : "At the gym",
    forGymText1: "Step-aerobics",
    forGymText2: "Body Sculpt",
    forGymText3: "Body Pump",
    forHome : "At home",
    forHomeText1: "Crossfit",
    forHomeText2: "Stretching",
    forHomeText3: "Callanetics",
    anyTime: "Exercise anytime, anywhere",
    anyDevices: "Available in any devices",
    startTraining: "Start training",

    //exercisesPage
    musculeGroup: "Musclt groups:",
    chset: "Chest",
    legs: "Legs",
    abs: "Abs",
    hands: "Arms",
    back: "Back",

    //aboutPage
    woman: "",
    EasyFitis: "",

}

const ru = {
    //navigation
    programs: "Программы",
    exercises: "Упражнения",
    help: "Помощь",
    about: "О нас",
    img: ruImg,

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
    woman: "",
    EasyFitis: "",

}

export const getLang = (code) => {
    switch(code) {
        case "ru": return ru;
        case "en": return en;
    }
}