import React from "react";
import cl from "./helpModal.module.css";
import userGuide from "../../../files/userGuide.pdf"

const HelpModal = ({active, setActive}) => { 
    const classes = cl.helpModal + " " + cl.active;
    return (
        <div className={active ? classes : cl.helpModal} onClick={() => setActive(false)}>
            <div className={cl.helpModal__content} onClick={e => e.stopPropagation()}>
                <h1>Частые вопросы (FAQ)</h1>
                <p>1. Сайт внезапно перестал отвечать или закрылся, можно ли вернуться к тренировке на том же моменте?</p>
                <p>К сожалению, у нас пока не предусмотрен личный кабинет пользователя, а значит, ваш процесс не сохраняется. Вы можете заново открыть то же упражнение и перемотать на нужный отрезок времени.</p>
                <p>2. Подходят ли программы тренировок для новичков?</p>
                <p>Да, большинство наших программ построены по принципу увеличивающейся нагрузки. К тому же все тренировки имеют значок сложности, чтобы пользователь оценил справится он или нет.</p>
                <p>3. Какие направления тренировок я могу выбрать?</p>
                <p>Наш сайт предлагает множество направлений тренировок, к примеру:</p>
                <ul>
                    <li>йога;</li>
                    <li>пилатес;</li>
                    <li>кроссфит;</li>
                    <li>кардио; </li>
                    <li>силовые тренировки.</li>
                </ul>
                <p>4. Какой инвентарь необходим?</p>
                <p>Каждое направление есть с инвентарём и без. Специально, чтобы был выбор. Также большое количество тренировок сделано с подручными средствами для удобства использования в домашних условиях.</p>
                <p>Если вы не нашли ответа на свой вопрос, пожалуйста, свяжитесь с нами.</p>
                <p>Наши контакты: +79024716514, example@mail.ru.</p>
                <p>Ссылка на полное руководство пользователя:</p>
                <a href={userGuide} target="_blank" rel="noreferrer">Руководство пользователя</a>
            </div>
        </div>
    )
}

export default HelpModal;