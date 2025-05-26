// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化下载按钮事件
    initDownloadButtons();
    
    // 初始化二维码点击放大效果
    initQRCodeZoom();
    
    // 初始化导航栏滚动效果
    initNavbarScroll();
    
    // 初始化动画效果
    initAnimations();
    
    console.log('汇金Pro官网原型已初始化');
});

// 初始化下载按钮事件
function initDownloadButtons() {
    // 主页下载按钮
    const windowsDownloadBtn = document.getElementById('windowsDownload');
    const androidDownloadBtn = document.getElementById('androidDownload');
    const mobileDownloadBtn = document.getElementById('mobileDownload');
    
    // 快速开始区域下载按钮
    const quickDownloadWindowsBtn = document.getElementById('quickDownloadWindows');
    const quickDownloadAndroidBtn = document.getElementById('quickDownloadAndroid');
    
    // 模态框下载按钮
    const modalWindowsDownloadBtn = document.getElementById('modalWindowsDownload');
    const modalAndroidDownloadBtn = document.getElementById('modalAndroidDownload');
    const modalMobileDownloadBtn = document.getElementById('modalMobileDownload');
    
    // 绑定主页下载按钮事件
    if (windowsDownloadBtn) {
        windowsDownloadBtn.addEventListener('click', function() {
            simulateDownload('收银系统v2.1.5.exe');
        });
    }
    
    if (androidDownloadBtn) {
        androidDownloadBtn.addEventListener('click', function() {
            simulateDownload('收银系统v2.1.5.apk');
        });
    }
    
    if (mobileDownloadBtn) {
        mobileDownloadBtn.addEventListener('click', function() {
            simulateDownload('移动点单系统v2.1.5.apk');
        });
    }
    
    // 绑定快速开始区域下载按钮事件
    if (quickDownloadWindowsBtn) {
        quickDownloadWindowsBtn.addEventListener('click', function() {
            simulateDownload('收银系统v2.1.5.exe');
        });
    }
    
    if (quickDownloadAndroidBtn) {
        quickDownloadAndroidBtn.addEventListener('click', function() {
            simulateDownload('收银系统v2.1.5.apk');
        });
    }
    
    // 绑定模态框下载按钮事件
    if (modalWindowsDownloadBtn) {
        modalWindowsDownloadBtn.addEventListener('click', function() {
            simulateDownload('收银系统v2.1.5.exe');
        });
    }
    
    if (modalAndroidDownloadBtn) {
        modalAndroidDownloadBtn.addEventListener('click', function() {
            simulateDownload('收银系统v2.1.5.apk');
        });
    }
    
    if (modalMobileDownloadBtn) {
        modalMobileDownloadBtn.addEventListener('click', function() {
            simulateDownload('移动点单系统v2.1.5.apk');
        });
    }
}

// 模拟下载
function simulateDownload(fileName) {
    const modal = document.getElementById('downloadModal');
    let bsModal;
    
    // 如果模态框未打开，则打开模态框
    if (modal && !modal.classList.contains('show')) {
        bsModal = new bootstrap.Modal(modal);
        bsModal.show();
    }
    
    // 获取下载进度容器和进度条
    const progressContainer = document.querySelector('.download-progress-container');
    const progressBar = document.querySelector('.progress-bar');
    const downloadStatus = document.querySelector('.download-status');
    
    if (progressContainer && progressBar && downloadStatus) {
        // 显示下载进度条
        progressContainer.classList.remove('d-none');
        downloadStatus.textContent = `正在下载 ${fileName}...`;
        
        // 模拟下载进度
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', progress);
            
            if (progress >= 100) {
                clearInterval(interval);
                downloadStatus.textContent = `${fileName} 下载完成！`;
                
                // 2秒后隐藏进度条
                setTimeout(() => {
                    progressContainer.classList.add('d-none');
                    progressBar.style.width = '0%';
                    progressBar.setAttribute('aria-valuenow', 0);
                }, 2000);
            }
        }, 200);
    }
}

// 初始化二维码点击放大效果
function initQRCodeZoom() {
    const qrCodes = document.querySelectorAll('.qrcode-container');
    
    qrCodes.forEach(container => {
        container.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (!img) return;
            
            // 检查是否已经有模态框
            let modal = document.getElementById('qrModal');
            if (!modal) {
                // 创建模态框
                modal = document.createElement('div');
                modal.id = 'qrModal';
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '9999';
                
                // 创建关闭按钮
                const closeBtn = document.createElement('button');
                closeBtn.textContent = '×';
                closeBtn.style.position = 'absolute';
                closeBtn.style.top = '20px';
                closeBtn.style.right = '20px';
                closeBtn.style.fontSize = '30px';
                closeBtn.style.color = 'white';
                closeBtn.style.background = 'none';
                closeBtn.style.border = 'none';
                closeBtn.style.cursor = 'pointer';
                
                // 创建图片容器
                const imgContainer = document.createElement('div');
                imgContainer.style.position = 'relative';
                imgContainer.style.maxWidth = '90%';
                imgContainer.style.maxHeight = '90%';
                
                // 创建图片元素
                const modalImg = document.createElement('img');
                modalImg.src = img.src;
                modalImg.style.maxWidth = '100%';
                modalImg.style.maxHeight = '90vh';
                modalImg.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                
                // 创建保存按钮
                const saveBtn = document.createElement('button');
                saveBtn.textContent = '保存二维码';
                saveBtn.style.padding = '10px 20px';
                saveBtn.style.marginTop = '20px';
                saveBtn.style.backgroundColor = '#2B7AE9';
                saveBtn.style.color = 'white';
                saveBtn.style.border = 'none';
                saveBtn.style.borderRadius = '4px';
                saveBtn.style.cursor = 'pointer';
                saveBtn.style.display = 'block';
                saveBtn.style.margin = '20px auto 0';
                
                // 添加到DOM
                imgContainer.appendChild(modalImg);
                imgContainer.appendChild(saveBtn);
                modal.appendChild(closeBtn);
                modal.appendChild(imgContainer);
                document.body.appendChild(modal);
                
                // 点击关闭
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
                
                // 点击背景关闭
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        document.body.removeChild(modal);
                    }
                });
                
                // 保存二维码（模拟）
                saveBtn.addEventListener('click', function() {
                    alert('二维码图片已保存到相册');
                });
            }
        });
    });
}

// 初始化导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    // 初始状态设置
    if (window.scrollY <= 10) {
        navbar.classList.remove('navbar-scrolled');
    } else {
        navbar.classList.add('navbar-scrolled');
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // 为移动端添加导航折叠功能
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
    
    navLinks.forEach(link => {
        // 仅为直接导航项添加点击关闭事件（非下拉菜单触发器）
        if (!link.classList.contains('dropdown-toggle')) {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) { // 移动视图
                    bsCollapse.hide();
                }
            });
        }
    });
}

// 初始化动画效果
function initAnimations() {
    // 添加滚动显示动画
    const elements = document.querySelectorAll('.systems-section .card, .quick-start-section .card');
    
    // 检查元素是否在视口中
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // 设置初始状态
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });
    
    // 检查并显示元素
    function checkAndShowElements() {
        elements.forEach(el => {
            if (isInViewport(el) && el.style.opacity === '0') {
                setTimeout(() => {
                    el.style.transition = 'opacity 0.5s, transform 0.5s';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }
    
    // 初始检查
    checkAndShowElements();
    
    // 滚动时检查
    window.addEventListener('scroll', checkAndShowElements);
}

// 初始化所有功能
function initAllFunctions() {
    initNavbarScroll();
    initAnimations();
    initDownloadButtons();
}

// 当文档加载完成后初始化
document.addEventListener('DOMContentLoaded', initAllFunctions);

// 将模拟下载函数暴露给全局，以便其他页面使用
window.simulateDownload = simulateDownload; 