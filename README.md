React/Redux/Node.js/mongoDB

Возникли проблемы с route во время деплоя, на локалке работает нормально, чтобы запустить нужно прописать npm start для двук папок, это главная папка и blog-api(бэк)

p.s. проект нужно переписать 




<div
  class="MuiContainer-root FullArticle_container__34UBz MuiContainer-maxWidthMd"
>
  <div class="d-flex pos-r">
    <p>Это готовый бэкенд блога, в котором реализован функционал:</p>
    <ul>
      <li>Авторизации</li>
      <li>Регистрации</li>
      <li>
        Создания, редактирования, удаления, получения статей и комментариев
      </li>
      <li>Получение дного или всех пользователей</li>
    </ul>
    <p>
      <strong>Ссылка на дизайн:</strong>
      <a
        href="https://www.figma.com/file/SMlq14HFnnQGttgwzJge0c/React-Blog-%2F-Diplom?node-id=0%3A1"
        >https://www.figma.com/file/SMlq14HFnnQGttgwzJge0c/React-Blog-%2F-Diplom?node-id=0%3A1</a
      >
    </p>
    <blockquote>
      <p>
        Дизайн можно сверстать самому или сделать любой дизайн на своё
        усмотрение (например с помощью MUI).
        <strong>Самое главное, реализовать функционал блога</strong>
      </p>
    </blockquote>
    <h2>Дизайн скрыт</h2>
    <h2 class="FullArticle_headline__2B_fs" id="Сроки сдачи"></h2>
    <p>
      На выполнение работы даётся <strong>1 месяц</strong> (с момента открытия
      доступа к этой дипломной).
    </p>
    <p>Дипломная работа не принимается, если нарушены сроки сдачи.</p>
    <p>
      Задавать вопросы в чате разрешено, однако, в течение этого срока не будет
      возможности созвониться с наставниками или со мной.
    </p>
    <p>Дипломную нужно выполнить самостоятельно.</p>
    <h2 class="FullArticle_headline__2B_fs" id="Apiary документация бэкенда">
      <a href="#Apiary документация бэкенда">#</a>Apiary документация бэкенда
    </h2>
    <p>
      По этому адресу
      <a href="https://blogapi22.docs.apiary.io"
        >https://blogapi22.docs.apiary.io</a
      >
      доступна вся документация бэкенда. Ниже прикрепляю видео с объяснением
      того, как пользоваться документацией.
    </p>
    <h2>Видео скрыто</h2>
    <h2
      class="FullArticle_headline__2B_fs"
      id="Как создать и настроить свою базу данных для дипломной"
    >
      <a href="#Как создать и настроить свою базу данных для дипломной">#</a>Как
      создать и настроить свою базу данных для дипломной
    </h2>
    <p>
      Серверная часть уже готова, но тебе необходимо создать свою БД и
      установить её в конфигах уже готового бэкенда, в файле <code>.env</code>.
    </p>
    <p>Подробнее в видео ниже.</p>
    <h2>Видео скрыто</h2>
    <h1 class="FullArticle_headline__2B_fs" id="Установка">
      <a href="#Установка">#</a>Установка
    </h1>
    <p>
      Для начала тебе нужно склонировать репозиторий готовой серверной части
      <a href="https://github.com/Archakov06/blog-api"
        >https://github.com/Archakov06/blog-api</a
      >
    </p>
    <p>
      Далее, открой через свой редактор этот бэкенд и произвести установку всех
      зависимостей. Для этого выполни команду <code>yarn</code>.
    </p>
    <h1 class="FullArticle_headline__2B_fs" id="Настройка">
      <a href="#Настройка">#</a>Настройка
    </h1>
    <ol>
      <li>
        Когда установка зависимостей завершилась, необходимо создать файл
        <code>.env</code>, вставив в этот новый файл всё содержимое из файла
        <code>.env.example</code>.
      </li>
      <li>
        Теперь необходимо зарегистрироваться на сайте
        <a href="https://mongodb.com">https://mongodb.com</a> и скопировать
        ссылку на свою MongoDB базу данных.
      </li>
      <li>
        Внутри файла <code>.env</code> есть строка <code>MONGODB_URI=XXX</code>,
        вместо <code>XXX</code> вставь ссылку на свою БД.
      </li>
    </ol>
    <h1 class="FullArticle_headline__2B_fs" id="Запуск">
      <a href="#Запуск">#</a>Запуск
    </h1>
    <p>
      Для того чтобы запустить сам сервер, выполни команду
      <code>yarn start</code>.
    </p>
    <p>
      Теперь по адресу <code>http://localhost:5656</code> будет доступен сервер.
    </p>
    <p>Ниже перечислены все доступные роуты в документации Apiary</p>
    <h1 class="FullArticle_headline__2B_fs" id="API документация (Apiary)">
      <a href="#API документация (Apiary)">#</a>API документация (Apiary)
    </h1>
    <p>
      По адресу
      <a href="https://blogapi22.docs.apiary.io/"
        >https://blogapi22.docs.apiary.io/</a
      >
      доступна вся документация по всем роутам с подробным объяснением того, что
      и как делает каждый роут.
    </p>
    <p>
      Учитывай тот момент, что для создания статьи или комментария, тебе
      необходимо быть авторизованным. После произведения авторизации, бэкенд
      тебе в ответ вернёт <code>token</code>. Его необходимо передавать во все
      защищённые роуты внутри headers в свойство <code>Authorization</code>.
    </p>
    <p>Вот пример запроса:</p>
    <pre><div class="language-js FullArticle_preCode__2krQ5" style="color: rgb(212, 212, 212); font-size: 13px; text-shadow: none; font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, &quot;Courier New&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; background: rgb(30, 30, 30);"><code class="language-js" style="color: rgb(212, 212, 212); font-size: 13px; text-shadow: none; font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, &quot;Courier New&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">1</span><span>axios</span><span class="token" style="color: rgb(212, 212, 212);">.</span><span class="token method property-access" style="color: rgb(220, 220, 170);">post</span><span class="token" style="color: rgb(212, 212, 212);">(</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">2</span><span>  </span><span class="token template-string template-punctuation" style="color: rgb(206, 145, 120);">`</span><span class="token template-string" style="color: rgb(206, 145, 120);">http://localhost:5656/posts</span><span class="token template-string template-punctuation" style="color: rgb(206, 145, 120);">`</span><span class="token" style="color: rgb(212, 212, 212);">,</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">3</span><span>  </span><span class="token" style="color: rgb(212, 212, 212);">{</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">4</span><span>    title</span><span class="token" style="color: rgb(212, 212, 212);">:</span><span> </span><span class="token" style="color: rgb(206, 145, 120);">"Заголовок статьи"</span><span class="token" style="color: rgb(212, 212, 212);">,</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">5</span><span>    text</span><span class="token" style="color: rgb(212, 212, 212);">:</span><span> </span><span class="token" style="color: rgb(206, 145, 120);">"........"</span><span class="token" style="color: rgb(212, 212, 212);">,</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">6</span><span>  </span><span class="token" style="color: rgb(212, 212, 212);">}</span><span class="token" style="color: rgb(212, 212, 212);">,</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">7</span><span>  </span><span class="token" style="color: rgb(212, 212, 212);">{</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">8</span><span>    headers</span><span class="token" style="color: rgb(212, 212, 212);">:</span><span> </span><span class="token" style="color: rgb(212, 212, 212);">{</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">9</span><span>      </span><span class="token" style="color: rgb(206, 145, 120);">"Authorization"</span><span class="token" style="color: rgb(212, 212, 212);">:</span><span> </span><span class="token" style="color: rgb(206, 145, 120);">"ТУТ_ТОКЕН"</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">10</span><span>    </span><span class="token" style="color: rgb(212, 212, 212);">}</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">11</span><span>  </span><span class="token" style="color: rgb(212, 212, 212);">}</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">12</span><span></span><span class="token" style="color: rgb(212, 212, 212);">)</span><span class="token" style="color: rgb(212, 212, 212);">;</span></span></code></div></pre>
    <p>
      Также, ты можешь создать настроенный экземляр аксиоса и использовать его
      для отправки всех запросов.
    </p>
    <pre><div class="language-js FullArticle_preCode__2krQ5" style="color: rgb(212, 212, 212); font-size: 13px; text-shadow: none; font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, &quot;Courier New&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 4; hyphens: none; padding: 1em; margin: 0.5em 0px; overflow: auto; background: rgb(30, 30, 30);"><code class="language-js" style="color: rgb(212, 212, 212); font-size: 13px; text-shadow: none; font-family: Menlo, Monaco, Consolas, &quot;Andale Mono&quot;, &quot;Ubuntu Mono&quot;, &quot;Courier New&quot;, monospace; direction: ltr; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; line-height: 1.5; tab-size: 4; hyphens: none;"><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">1</span><span class="token" style="color: rgb(106, 153, 85);">// confing/axios.js</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">2</span><span></span><span class="token" style="color: rgb(197, 134, 192);">export</span><span> </span><span class="token" style="color: rgb(86, 156, 214);">const</span><span> instance </span><span class="token" style="color: rgb(212, 212, 212);">=</span><span> axios</span><span class="token" style="color: rgb(212, 212, 212);">.</span><span class="token method property-access" style="color: rgb(220, 220, 170);">create</span><span class="token" style="color: rgb(212, 212, 212);">(</span><span class="token" style="color: rgb(212, 212, 212);">{</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">3</span><span>  baseURL</span><span class="token" style="color: rgb(212, 212, 212);">:</span><span> </span><span class="token" style="color: rgb(206, 145, 120);">'http://localhost:5656'</span><span class="token" style="color: rgb(212, 212, 212);">,</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">4</span><span>  headers</span><span class="token" style="color: rgb(212, 212, 212);">:</span><span> </span><span class="token" style="color: rgb(212, 212, 212);">{</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">5</span><span>      </span><span class="token" style="color: rgb(78, 201, 176);">Authorization</span><span class="token" style="color: rgb(212, 212, 212);">:</span><span> </span><span class="token dom" style="color: rgb(156, 220, 254);">window</span><span class="token" style="color: rgb(212, 212, 212);">.</span><span class="token property-access">localStorage</span><span class="token" style="color: rgb(212, 212, 212);">.</span><span class="token method property-access" style="color: rgb(220, 220, 170);">getItem</span><span class="token" style="color: rgb(212, 212, 212);">(</span><span class="token" style="color: rgb(206, 145, 120);">'token'</span><span class="token" style="color: rgb(212, 212, 212);">)</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">6</span><span>    </span><span class="token" style="color: rgb(212, 212, 212);">}</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">7</span><span></span><span class="token" style="color: rgb(212, 212, 212);">}</span><span class="token" style="color: rgb(212, 212, 212);">)</span><span class="token" style="color: rgb(212, 212, 212);">;</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">8</span>
  </span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">9</span><span></span><span class="token" style="color: rgb(106, 153, 85);">// App.js</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">10</span><span></span><span class="token" style="color: rgb(197, 134, 192);">import</span><span> </span><span class="token" style="color: rgb(212, 212, 212);">{</span><span class="token"> instance </span><span class="token" style="color: rgb(212, 212, 212);">}</span><span> </span><span class="token" style="color: rgb(197, 134, 192);">from</span><span> </span><span class="token" style="color: rgb(206, 145, 120);">'./config/axios'</span><span class="token" style="color: rgb(212, 212, 212);">;</span><span>
  </span></span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">11</span>
  </span><span display="block"><span class="linenumber react-syntax-highlighter-line-number" style="display: inline-block; min-width: 2.25em; padding-right: 1em; text-align: right; user-select: none; color: rgb(106, 153, 85);">12</span><span></span><span class="token" style="color: rgb(86, 156, 214);">const</span><span> </span><span class="token" style="color: rgb(212, 212, 212);">{</span><span> data </span><span class="token" style="color: rgb(212, 212, 212);">}</span><span> </span><span class="token" style="color: rgb(212, 212, 212);">=</span><span> </span><span class="token" style="color: rgb(197, 134, 192);">await</span><span> instance</span><span class="token" style="color: rgb(212, 212, 212);">.</span><span class="token method property-access" style="color: rgb(220, 220, 170);">get</span><span class="token" style="color: rgb(212, 212, 212);">(</span><span class="token" style="color: rgb(206, 145, 120);">'/posts'</span><span class="token" style="color: rgb(212, 212, 212);">)</span><span class="token" style="color: rgb(212, 212, 212);">;</span></span></code></div></pre>
    <h2 class="FullArticle_headline__2B_fs" id="Как пользоваться Apiariy?">
      <a href="#Как пользоваться Apiariy?">#</a>Как пользоваться Apiariy?
    </h2>
    <ol>
      <li>
        Если ты хочешь тестировать запросы через сервис Apiary, то необходимо
        там переключится на "Use Browser", чтобы запросы не отправлялись через
        их сервис. Если не поменять, то всегда будет выдавать ошибку.
        <img src="http://joxi.ru/L21a3a5cwMkjq2.png" /> <br />
        <br />
      </li>
      <li>
        Чтобы отправить запрос, достаточно нажать на "Call Resource"
        <img src="http://joxi.ru/zANLQLMt197o0m.png" />
      </li>
      <li>
        Если необходимо передать POST-параметры в запросе, то нажимаем на "Body"
        и указываем там JSON с параметрами.
        <img src="http://joxi.ru/BA0ZaZQC1Dxbxm.png" />
      </li>
    </ol>

    <div>
      <hr class="MuiDivider-root mt-50 mb-20" />
      <div class="d-flex justify-between">
        <div></div>
        <div></div>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-outlined pt-10 pb-10 pl-15 pr-15 MuiButton-outlinedPrimary MuiButton-outlinedSizeLarge MuiButton-sizeLarge"
          tabindex="0"
          type="button"
        >
          <span class="MuiButton-label"
            >Перейти к следующему уроку<svg
              class="MuiSvgIcon-root ml-10"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path></svg></span
          ><span class="MuiTouchRipple-root"></span>
        </button>
      </div>
    </div>
  </div>
</div>
