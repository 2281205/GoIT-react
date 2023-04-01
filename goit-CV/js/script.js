import {info, cv }  from './info.js';

document.querySelector(`body`).innerHTML = `
            <div class='wrap'>
                <div class="container">
                    <div  id="aside" class='container-aside' ></div>
                    <div id="content"class='container-content'></div>
                </div>
            </div>`;

document.title = cv.title;
const NameSurname = cv.name+' '+cv.surname;
const aside = document.querySelector(`#aside`);
const content = document.querySelector(`#content`);

const renderContent = (cv) => {
    let contentName = document.createElement (`div`);
        contentName.className = `container-content-item`;
        contentName.innerHTML = `<h1 class="about-me-title">${cv.name} ${cv.surname}</h1>`;
    content.appendChild(contentName);

    let contentTarget = document.createElement (`div`);
        contentTarget.className = `container-content-item`;
        contentTarget.innerHTML = `<h2 class="about-me-profession">${cv.targetCV}</h2>`;
    content.appendChild(contentTarget);

    let contentSummry = document.createElement (`div`);
        contentSummry.className = `container-content-item`;
        contentSummry.innerHTML = ` <p class="about-me-summary">SUMMARY</p>
                                    <p class="about-me-description">${cv.summaryCV}</p>`;
    content.appendChild(contentSummry);

    if(cv.additionalinfoCV){
        let contentAddSummry = document.createElement (`div`);
            contentAddSummry.className = `container-content-item`;
            contentAddSummry.innerHTML = `  <p class="about-me-summary">Additional info</p>
                                            <p class="about-me-description">${cv.additionalinfoCV}</p>`;
        content.appendChild(contentAddSummry);
    }

    for (let prop in cv) {
        if(Array.isArray(cv[prop])){
            const itemList = JSON.parse(JSON.stringify(cv[prop]));
            const itemStyle = itemList.shift();
            const itemTitle = itemList.shift();

            const contentItem = document.createElement (`div`);
            contentItem.className = `container-content-item`;
            if (itemStyle === 'table') {
                const itemItem = itemList.map(item => `
                    <tr>
				        <td>
                            <span class="project-list-title">
                                <a href="${item.link}">${item.nameProj}</a>
                            </span>
                        </td>
				        <td>
                            <a href="${item.linkGit}">
                            <span> [ ${item.skillProj} ] </span>
                            </a>
                        </td>
			        </tr>
                    <tr>
                        <td>${item.textProj}</td>
                    </tr>`);
                contentItem.innerHTML = `<h3 class="about-me-summary">${itemTitle}</h3>
                            <table class="project-list" style="width:fit-content;">
                                <tbody>
                                ${itemItem.join(``)}  
                                </tbody>
                            </table>`;};

            if (itemStyle === 'inline') {
                const itemItem = itemList.map(item => `
                    <div class="work-experiеnce-block">
                        <h4 class="work-experience-position">${item.name} <br><span class="work-experience-company">${item.Corp}</span></h4>
                        <p class="work-experiеnce-period">${item.dataOn} - ${item.dataOff}
                        <span class="work-experience-location"> | ${item.place ? item.place: item.degree} </span>
                        ${item.achivment ? `<p>Achivment</p><br><span>${item.achivment}</span>` : ``}
                    </div>`);
                contentItem.innerHTML = `<h3 class="about-me-summary">${itemTitle}</h3>
                ${itemItem.join(``)}`;};

            content.appendChild(contentItem);
        }
    }
};

const renderSidebar = (info,NameSurname) => {
    let asideImg = document.createElement (`div`);
        asideImg.className = `container-aside-item`;
        asideImg.innerHTML = `<img src="${info.img}" width="200px" alt="${NameSurname}"/>`;
    aside.appendChild(asideImg);

    for (let prop in info) {
       if(Array.isArray(info[prop]))
       {
        const itemList = JSON.parse(JSON.stringify(info[prop]));
        const itemTitle = itemList.shift();
        const itemItem = itemList.map(item => `<li><span><a class="section-link" href="${Array.isArray(item) ? item[1] : item}}">${Array.isArray(item) ? item[0] : item}</a></span></li>`);
        
        const asideItem = document.createElement (`div`)
            asideItem.className = `container-aside-item`;
            asideItem.innerHTML = `<h3 class="aside-item-title">${itemTitle}</h3>
                                <ul class="aside-item-list">${itemItem.join('')}</ul>`;
        aside.appendChild(asideItem);
       }
    }
};

renderContent(cv)
renderSidebar(info,NameSurname)