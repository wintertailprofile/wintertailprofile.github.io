// ===================================
// 전역 변수
// ===================================
let currentImageIndex = 0;
let galleryImages = [];

// ===================================
// DOM 요소
// ===================================
const elements = {
    header: document.getElementById('header'),
    menuToggle: document.getElementById('menuToggle'),
    menuClose: document.getElementById('menuClose'),
    sideMenu: document.getElementById('sideMenu'),
    sideMenuOverlay: document.getElementById('sideMenuOverlay'),
    musicBtn: document.getElementById('musicBtn'),
    bgMusic: document.getElementById('bgMusic'),
    imageModal: document.getElementById('imageModal'),
    modalImage: document.getElementById('modalImage'),
    modalClose: document.getElementById('modalClose'),
    modalPrev: document.getElementById('modalPrev'),
    modalNext: document.getElementById('modalNext'),
    galleryGrid: document.getElementById('galleryGrid')
};

// ===================================
// 갤러리 이미지 목록
// ===================================
const imageList = [
    { src: '한겨울 에셋/adjust_clothes.jpg', title: '옷 정리하는 모습' },
    { src: '한겨울 에셋/arrive_soaked_in_rain.jpg', title: '비에 젖어 도착한 모습' },
    { src: '한겨울 에셋/be_petted_passively.jpg', title: '쓰다듬어지는 모습' },
    { src: '한겨울 에셋/come_out_after_shower.jpg', title: '샤워 후 나오는 모습' },
    { src: '한겨울 에셋/come_out_with_towel_around_neck.jpg', title: '목에 수건을 두른 모습' },
    { src: '한겨울 에셋/cook.jpg', title: '요리하는 모습' },
    { src: '한겨울 에셋/cunnilingus_or_oral.jpg', title: '오랄' },
    { src: '한겨울 에셋/dazed_with_arousal.jpg', title: '황홀한 표정' },
    { src: '한겨울 에셋/doggy_style.jpg', title: '체위' },
    { src: '한겨울 에셋/drink_tea_with_smile.jpg', title: '차를 마시며 웃는 모습' },
    { src: '한겨울 에셋/drink_tea.jpg', title: '차 마시는 모습' },
    { src: '한겨울 에셋/eat_meal.jpg', title: '식사하는 모습' },
    { src: '한겨울 에셋/fall_asleep_holding_hands.jpg', title: '손 잡고 잠든 모습' },
    { src: '한겨울 에셋/fall_asleep_on_sofa.jpg', title: '소파에서 잠든 모습' },
    { src: '한겨울 에셋/feel_orgasm.jpg', title: '오르가즘' },
    { src: '한겨울 에셋/full_outfit_style_1.jpg', title: '전신 스타일 1' },
    { src: '한겨울 에셋/full_outfit_style_2.jpg', title: '전신 스타일 2' },
    { src: '한겨울 에셋/get_annoyed.jpg', title: '짜증난 표정' },
    { src: '한겨울 에셋/get_down_from_bed.jpg', title: '침대에서 일어나는 모습' },
    { src: '한겨울 에셋/grin_goofily.jpg', title: '싱긋 웃는 모습' },
    { src: '한겨울 에셋/half_naked_lean_on_elbow_and_stare.jpg', title: '반나체로 누워있는 모습' },
    { src: '한겨울 에셋/hold_umbrella_for_someone.jpg', title: '우산을 받쳐주는 모습' },
    { src: '한겨울 에셋/irritated_expression.jpg', title: '불안한 표정' },
    { src: '한겨울 에셋/jealous_expression.jpg', title: '질투하는 표정' },
    { src: '한겨울 에셋/kiss.jpg', title: '키스' },
    { src: '한겨울 에셋/lie_on_bed_in_pain.jpg', title: '침대에 누워 괴로워하는 모습' },
    { src: '한겨울 에셋/loving_gaze.jpg', title: '다정한 시선' },
    { src: '한겨울 에셋/masturbate_sniffing_shirt_scent.jpg', title: '자위' },
    { src: '한겨울 에셋/masturbation_ejaculation.jpg', title: '자위 사정' },
    { src: '한겨울 에셋/NSFW_missionary_sex_POV_view.jpg', title: '정상위 POV' },
    { src: '한겨울 에셋/pant_with_arousal.jpg', title: '헐떡이는 모습' },
    { src: '한겨울 에셋/rub_cheek_against_partner_hand.jpg', title: '손에 볼을 비비는 모습' },
    { src: '한겨울 에셋/run_fingers_through_hair_while_showering.jpg', title: '샤워 중 머리를 감는 모습' },
    { src: '한겨울 에셋/showering.jpg', title: '샤워하는 모습' },
    { src: '한겨울 에셋/sigh.jpg', title: '한숨 쉬는 모습' },
    { src: '한겨울 에셋/sit_blankly_on_bed.jpg', title: '침대에 멍하니 앉아있는 모습' },
    { src: '한겨울 에셋/smile_awkwardly.jpg', title: '어색하게 웃는 모습' },
    { src: '한겨울 에셋/smile_broadly.jpg', title: '활짝 웃는 모습' },
    { src: '한겨울 에셋/smile_while_looking_at_smartphone.jpg', title: '스마트폰을 보며 미소짓는 모습' },
    { src: '한겨울 에셋/smile_with_excitement.jpg', title: '신나게 웃는 모습' },
    { src: '한겨울 에셋/smoke.jpg', title: '담배 피우는 모습' },
    { src: '한겨울 에셋/suffer_from_trauma.jpg', title: '트라우마로 고통받는 모습' },
    { src: '한겨울 에셋/take_a_walk.jpg', title: '산책하는 모습' },
    { src: '한겨울 에셋/take_off_pants.jpg', title: '바지 벗는 모습' },
    { src: '한겨울 에셋/take_off_shirt_in_arousal.jpg', title: '옷 벗는 모습' },
    { src: '한겨울 에셋/theme_park_headband_gift.jpg', title: '테마파크 머리띠 선물' },
    { src: '한겨울 에셋/tie_necktie.jpg', title: '넥타이를 매는 모습' },
    { src: '한겨울 에셋/tremble_and_cry.jpg', title: '울고 있는 모습' },
    { src: '한겨울 에셋/wet_shirt.jpg', title: '젖은 셔츠' },
    { src: '한겨울 에셋/whine.jpg', title: '징징거리는 모습' }
];

// ===================================
// 초기화
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initMusicPlayer();
    initGallery();
    initImageModal();
    initScrollEffects();
    initSmoothScroll();
});

// ===================================
// 메뉴 기능
// ===================================
function initMenu() {
    // 햄버거 메뉴 열기
    elements.menuToggle?.addEventListener('click', () => {
        elements.sideMenu.classList.add('active');
        elements.sideMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // 메뉴 닫기
    const closeMenu = () => {
        elements.sideMenu.classList.remove('active');
        elements.sideMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    elements.menuClose?.addEventListener('click', closeMenu);
    elements.sideMenuOverlay?.addEventListener('click', closeMenu);

    // 사이드 메뉴 링크 클릭 시 메뉴 닫기
    const sideNavLinks = document.querySelectorAll('.side-nav-link');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // 다운로드 링크가 아닌 경우에만 메뉴 닫기
            if (!link.classList.contains('download-link')) {
                closeMenu();
            }
        });
    });

    // ESC 키로 메뉴 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.sideMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ===================================
// 음악 플레이어
// ===================================
function initMusicPlayer() {
    let isPlaying = false;
    const playIcon = elements.musicBtn.querySelector('.play-icon');
    const pauseIcon = elements.musicBtn.querySelector('.pause-icon');

    elements.musicBtn?.addEventListener('click', () => {
        if (isPlaying) {
            elements.bgMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            isPlaying = false;
        } else {
            elements.bgMusic.play().catch(error => {
                console.error('음악 재생 실패:', error);
            });
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            isPlaying = true;
        }
    });

    // 음악이 끝나면 자동으로 다시 재생 (loop 속성으로 처리되지만 추가 처리)
    elements.bgMusic?.addEventListener('ended', () => {
        if (isPlaying) {
            elements.bgMusic.play();
        }
    });
}

// ===================================
// 갤러리 생성
// ===================================
function initGallery() {
    galleryImages = imageList;

    imageList.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <span class="gallery-item-title">${image.title}</span>
            </div>
        `;

        galleryItem.addEventListener('click', () => {
            openImageModal(index);
        });

        elements.galleryGrid?.appendChild(galleryItem);
    });
}

// ===================================
// 이미지 모달
// ===================================
function initImageModal() {
    // 모달 닫기
    const closeModal = () => {
        elements.imageModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    elements.modalClose?.addEventListener('click', closeModal);
    elements.imageModal?.addEventListener('click', (e) => {
        if (e.target === elements.imageModal) {
            closeModal();
        }
    });

    // 이전/다음 버튼
    elements.modalPrev?.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateModalImage();
    });

    elements.modalNext?.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateModalImage();
    });

    // 키보드 네비게이션
    document.addEventListener('keydown', (e) => {
        if (!elements.imageModal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            updateModalImage();
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            updateModalImage();
        }
    });
}

function openImageModal(index) {
    currentImageIndex = index;
    updateModalImage();
    elements.imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalImage() {
    const image = galleryImages[currentImageIndex];
    elements.modalImage.src = image.src;
    elements.modalImage.alt = image.title;
}

// ===================================
// 스크롤 효과
// ===================================
function initScrollEffects() {
    let lastScroll = 0;
    const header = elements.header;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // 헤더 숨김/표시
        if (currentScroll > lastScroll && currentScroll > 100) {
            header?.classList.add('hidden');
        } else {
            header?.classList.remove('hidden');
        }

        lastScroll = currentScroll;

        // 페이드인 애니메이션
        handleFadeInAnimation();
    });

    // 초기 로드 시 애니메이션
    handleFadeInAnimation();
}

function handleFadeInAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.85) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// ===================================
// 부드러운 스크롤
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // 다운로드 링크 등 외부 링크는 제외
            if (href === '#' || !href.startsWith('#')) return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // 헤더 높이만큼 오프셋
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// 반응형 처리
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 메뉴가 열린 상태에서 화면 크기가 변경되면 메뉴 닫기
        if (window.innerWidth > 968 && elements.sideMenu.classList.contains('active')) {
            elements.sideMenu.classList.remove('active');
            elements.sideMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

// ===================================
// 이미지 로딩 최적화
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    // 레이지 로딩할 이미지에 적용
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// 페이지 로드 완료 시 애니메이션 트리거
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // 프로그레스 바 애니메이션
    const traitFills = document.querySelectorAll('.trait-fill');
    traitFills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 300);
    });
});
