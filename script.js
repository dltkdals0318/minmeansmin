// 각 작업이 여러 품사 역할을 할 수 있도록 구성
const projects = {
    "relative-density": {
        title: "Relative Density",
        description: "CSS Grid 레이아웃을 JavaScript로 실시간 변경하는 퍼블리싱 웹사이트",
        image: "source/relative-density.jpg",
        forms: {
            adjective: "실험적인",
            noun: "그리드 시스템",
            verb: "변화시키며",
            tool: "CSS Grid로",
            method: "레이아웃을 조작하여"
        }
    },
    "summer-type": {
        title: "Summer type A to Z",
        description: "여름 키워드를 알파벳별로 정리한 인터랙티브 포스터",
        image: "source/summer-type.jpg",
        forms: {
            adjective: "인터랙티브한",
            noun: "알파벳 스티커",
            verb: "배치하며",
            tool: "키보드 입력으로",
            method: "여름 키워드를 붙여"
        }
    },
    "soft-print": {
        title: "Soft Print Protocol",
        description: "기계적 처리 과정을 인터랙션으로 구현한 웹사이트",
        image: "source/soft-print.jpg",
        forms: {
            adjective: "기계적인",
            noun: "출력 프로토콜",
            verb: "처리하며",
            tool: "프린터 메타포로",
            method: "이미지를 덧입혀"
        }
    },
    "bias-atlas": {
        title: "Bias Atlas",
        description: "AI 편향성을 3D 지구본으로 시각화한 작업",
        image: "source/bias-atlas.jpg",
        forms: {
            adjective: "편향된",
            noun: "데이터 지도",
            verb: "시각화하며",
            tool: "3D 지구본으로",
            method: "좌표를 매핑하여"
        }
    },
    "friendly-neighborhood": {
        title: "Your Friendly Neighborhood",
        description: "ChatGPT API를 활용한 물리적 AI 인터페이스",
        image: "source/friendly-neighborhood.jpg",
        forms: {
            adjective: "물리적인",
            noun: "AI 인터페이스",
            verb: "대화하며",
            tool: "ChatGPT로",
            method: "가상과 현실을 연결하여"
        }
    },
    "album-design": {
        title: "악역의 등장 앨범디자인",
        description: "타이포그래피를 활용한 앨범 디자인",
        image: "source/album-design.jpg",
        forms: {
            adjective: "극적인",
            noun: "악역 타이포그래피",
            verb: "표현하며",
            tool: "문자 조형으로",
            method: "앨범을 디자인하여"
        }
    },
    "pluralistic": {
        title: "Pluralistic (pigeon)",
        description: "Midjourney로 생성한 종교적 비둘기 이미지북",
        image: "source/pluralistic.jpg",
        forms: {
            adjective: "종교적인",
            noun: "비둘기 이미지",
            verb: "생성하며",
            tool: "Midjourney로",
            method: "AI 편향성을 탐구하여"
        }
    },
    "tikkeul": {
        title: "Tikkeul 서체 디자인",
        description: "현실의 물성을 반영한 서체 디자인",
        image: "source/tikkeul.jpg",
        forms: {
            adjective: "미세한",
            noun: "티끌 서체",
            verb: "디자인하며",
            tool: "물성 번역으로",
            method: "현실 감각을 재현하여"
        }
    }
};

const outcomes = [
    "새로운 시각적 경험을 만들어낸다.",
    "디지털과 물리적 경계를 흐린다.", 
    "기술과 예술의 접점을 탐색한다.",
    "데이터의 편향성을 드러낸다.",
    "인간과 AI의 관계를 재정의한다.",
    "문자의 조형적 가능성을 실험한다.",
    "이미지의 정치성을 질문한다.",
    "물질성의 디지털 번역을 시도한다."
];

function getRandomProjects(count = 6) {
    const projectKeys = Object.keys(projects);
    const shuffled = projectKeys.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateSentence() {
    const selectedProjects = getRandomProjects(6);
    const outcome = getRandomElement(outcomes);
    
    const project1 = projects[selectedProjects[0]];
    const project2 = projects[selectedProjects[1]]; 
    const project3 = projects[selectedProjects[2]];
    const project4 = projects[selectedProjects[3]];
    const project5 = projects[selectedProjects[4]];
    const project6 = projects[selectedProjects[5]];

    const sentenceContainer = document.getElementById('dynamic-sentence');
    
    sentenceContainer.innerHTML = `
        이상민은 서울에서 작업을 이어나가고 있는 디자이너다. 그는
        <span class="clickable project-work" onclick="showProject('${selectedProjects[0]}')">${project1.forms.adjective}</span><img src="${project1.image}" alt="${project1.title}" class="project-image" onclick="showProject('${selectedProjects[0]}')">
        <span class="clickable project-work" onclick="showProject('${selectedProjects[1]}')">${project2.forms.noun}</span><img src="${project2.image}" alt="${project2.title}" class="project-image" onclick="showProject('${selectedProjects[1]}')">을
        <span class="clickable project-work" onclick="showProject('${selectedProjects[2]}')">${project3.forms.tool}</span><img src="${project3.image}" alt="${project3.title}" class="project-image" onclick="showProject('${selectedProjects[2]}')">
        <span class="clickable project-work" onclick="showProject('${selectedProjects[3]}')">${project4.forms.verb}</span><img src="${project4.image}" alt="${project4.title}" class="project-image" onclick="showProject('${selectedProjects[3]}')">
        <span class="clickable project-work" onclick="showProject('${selectedProjects[4]}')">${project5.forms.method}</span><img src="${project5.image}" alt="${project5.title}" class="project-image" onclick="showProject('${selectedProjects[4]}')">
        <span class="clickable project-work" onclick="showProject('${selectedProjects[5]}')">${project6.forms.adjective}</span><img src="${project6.image}" alt="${project6.title}" class="project-image" onclick="showProject('${selectedProjects[5]}')"> ${outcome}
    `;
}

function showProject(projectId) {
    const project = projects[projectId];
    if (project) {
        // 기존 설명 제거
        const existingDescriptions = document.querySelectorAll('.project-description');
        existingDescriptions.forEach(desc => desc.remove());
        
        // 클릭된 프로젝트의 텍스트 요소 찾기
        const projectTexts = document.querySelectorAll('.project-work');
        let targetText = null;
        
        projectTexts.forEach(text => {
            if (text.onclick && text.onclick.toString().includes(projectId)) {
                targetText = text;
            }
        });
        
        if (targetText) {
            // 설명 요소 생성
            const description = document.createElement('span');
            description.className = 'project-description';
            description.textContent = project.description;
            
            // 텍스트 요소 안에 설명 추가 (absolute positioning 사용)
            targetText.appendChild(description);
        }
    }
}

// 페이지 로드 시 첫 문장 생성
document.addEventListener('DOMContentLoaded', () => {
    generateSentence();
    // 문장 생성 후 툴팁 이벤트 추가
    setTimeout(addTooltipEvents, 100);
});