const detailData = () => {
    const preloader = document.querySelector('.preloder')

    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown')

        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    const renderAnimeDetails = (array, itemId) => {
        const animeObj = array.find(item => item.id == itemId)
        const imageBlock = document.querySelector('.anime__details__pic')
        const viewsBlock = imageBlock.querySelector('.view')
        const titleBlock = document.querySelector('.anime__details__title h3')
        const subTitleBlock = document.querySelector('.anime__details__title span')
        const descriptionBlock = document.querySelector('.anime__details__text p')
        const widgetList = document.querySelectorAll('.anime__details__widget ul li')

        if (animeObj) {
            imageBlock.dataset.setbg = animeObj.image
            viewsBlock.insertAdjacentHTML('beforeend', `
                <i class="fa fa-eye"></i> ${animeObj.views}</div>
            `)

            titleBlock.textContent = animeObj.title
            subTitleBlock.textContent = animeObj['original-title']
            descriptionBlock.textContent = animeObj.description
            widgetList[0].insertAdjacentHTML('beforeend', `
                <span>Дата выхода:</span>${animeObj.date}
            `)
            widgetList[1].insertAdjacentHTML('beforeend', `
                <span>Оценка:</span> ${animeObj.rating} / 10
            `)
            widgetList[2].insertAdjacentHTML('beforeend', `
                <span>Жанр:</span> ${animeObj.tags.join(", ")}
            `)

            document.querySelectorAll('.set-bg').forEach((elem) => {
                elem.style.backgroundImage = `url(${elem.dataset.setbg})`
            })

            setTimeout(() => {
                preloader.classList.remove('active')
            }, 500)
        } else {
            console.log('Аниме отсутствует!');
        }
    }

    const setBreadcrumbs = (data, itemId) => {
        const breadcrumbs = document.querySelector('.breadcrumb__links')
        const anime = data.find(item => item.id == itemId)
        
        breadcrumbs.insertAdjacentHTML('beforeend', `
            <a href="./index.html"><i class="fa fa-home"></i> Главная</a>
            <a href="./categories.html?ganre=${anime.ganre}">${anime.ganre}</a>
            <span>${anime.title}</span>
        `)
    }

    fetch('https://anime-dd1ff-default-rtdb.firebaseio.com/anime.json')
        .then((response) => response.json())
        .then((data) => {
            const ganres = new Set()
            const ganreParams = new URLSearchParams(window.location.search).get('itemId')

            data.forEach((item) => {
                ganres.add(item.ganre)
            })

            if (ganreParams) {
                renderAnimeDetails(data, ganreParams)
            } else {
                console.log('Аниме отсутствует!');
            }
            renderGanreList(ganres)
            setBreadcrumbs(data, ganreParams)
        })
}

detailData()