<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>小考拉的私人菜单</title>
    <style>
        :root {
            --primary: #ffb6c1;
            --primary-dark: #ff91a4;
            --secondary: #ffe4ec;
            --gold: #f7c948;
            --gold-light: #ffe9a8;
            --bg: #fff8fa;
            --card-bg: #ffffff;
            --text: #6b5459;
            --text-light: #a8959b;
            --shadow: 0 4px 16px rgba(255, 182, 193, 0.18);
            --shadow-hover: 0 8px 24px rgba(255, 182, 193, 0.28);
            --border: #ffd6e0;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
            background: var(--bg);
            color: var(--text);
            min-height: 100vh;
            padding-bottom: 90px;
        }

        header {
            background: linear-gradient(135deg, #ffc6d4 0%, #ffdfe8 45%, #fff4d6 100%);
            padding: 20px 16px 16px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 20;
            box-shadow: 0 2px 12px rgba(255, 182, 193, 0.22);
        }
        header h1 {
            font-size: 1.65rem;
            color: #fff;
            text-shadow: 0 1px 3px rgba(255, 145, 164, 0.35);
            letter-spacing: 2px;
            font-weight: 700;
        }
        header .subtitle {
            color: rgba(255, 255, 255, 0.95);
            font-size: 0.84rem;
            margin-top: 3px;
            letter-spacing: 1px;
        }
        header .date-info {
            color: rgba(255, 255, 255, 0.92);
            font-size: 0.78rem;
            margin-top: 6px;
            background: rgba(255, 255, 255, 0.28);
            display: inline-block;
            padding: 3px 12px;
            border-radius: 12px;
        }

        .main-tabs {
            display: flex;
            background: #fff;
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 108px;
            z-index: 15;
        }
        .main-tab {
            flex: 1;
            padding: 13px 4px;
            text-align: center;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            background: none;
            color: var(--text-light);
            position: relative;
            transition: all 0.25s;
        }
        .main-tab.active {
            color: var(--primary-dark);
        }
        .main-tab.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 25%;
            width: 50%;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--gold));
            border-radius: 3px;
        }

        .search-bar {
            padding: 10px 14px;
            background: var(--bg);
            position: sticky;
            top: 152px;
            z-index: 14;
        }
        .search-input {
            width: 100%;
            padding: 10px 16px;
            border-radius: 22px;
            border: 1.5px solid var(--border);
            background: #fff;
            font-size: 0.88rem;
            color: var(--text);
            outline: none;
            transition: border-color 0.2s;
        }
        .search-input:focus {
            border-color: var(--primary);
        }
        .search-input::placeholder {
            color: #c9b0b8;
        }

        .category-tabs {
            display: flex;
            overflow-x: auto;
            padding: 10px 12px;
            background: var(--bg);
            gap: 8px;
            position: sticky;
            top: 198px;
            z-index: 13;
            scrollbar-width: none;
        }
        .category-tabs::-webkit-scrollbar { display: none; }
        .category-tab {
            flex: 0 0 auto;
            padding: 7px 16px;
            border-radius: 18px;
            background: #fff;
            font-size: 0.82rem;
            cursor: pointer;
            white-space: nowrap;
            border: 1.5px solid var(--border);
            color: var(--text-light);
            transition: all 0.25s;
            font-weight: 500;
        }
        .category-tab.active {
            background: linear-gradient(135deg, var(--primary), var(--gold));
            color: #fff;
            border-color: transparent;
            box-shadow: 0 2px 8px rgba(255, 145, 164, 0.35);
        }

        .menu-container {
            padding: 12px 14px;
            max-width: 620px;
            margin: 0 auto;
        }
        .dish-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
            margin-bottom: 16px;
        }
        .dish-card {
            background: var(--card-bg);
            border-radius: 18px;
            padding: 10px;
            box-shadow: var(--shadow);
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            text-align: center;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }
        .dish-card:active {
            transform: scale(0.97);
        }
        .dish-card img {
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
            border-radius: 14px;
            background: var(--secondary);
            margin-bottom: 8px;
        }
        .dish-card .placeholder {
            width: 100%;
            aspect-ratio: 1/1;
            border-radius: 14px;
            background: linear-gradient(135deg, #fff0f6, #fff7d6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.2rem;
            margin-bottom: 8px;
        }
        .dish-name {
            font-weight: 600;
            font-size: 0.92rem;
            line-height: 1.3;
            color: var(--text);
        }
        .dish-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            justify-content: center;
            margin-top: 5px;
        }
        .tag {
            background: var(--secondary);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.65rem;
            color: var(--primary-dark);
            font-weight: 500;
        }
        .dish-ingredients {
            font-size: 0.68rem;
            color: var(--text-light);
            margin-top: 4px;
            line-height: 1.25;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .cook-count {
            display: inline-block;
            background: #fff8e1;
            color: #d4a024;
            font-size: 0.65rem;
            padding: 3px 8px;
            border-radius: 10px;
            margin-top: 5px;
            font-weight: 600;
        }
        .add-btn {
            margin-top: 8px;
            background: linear-gradient(135deg, var(--primary), var(--gold));
            color: #fff;
            border: none;
            padding: 7px 10px;
            border-radius: 16px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.2s;
            width: 100%;
            font-weight: 600;
            box-shadow: 0 2px 8px rgba(255, 145, 164, 0.25);
        }
        .add-btn:active {
            transform: scale(0.95);
        }

        .cart-bar {
            position: fixed;
            bottom: 18px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 28px);
            max-width: 520px;
            background: #fff;
            border-radius: 30px;
            box-shadow: 0 6px 24px rgba(255, 182, 193, 0.28);
            padding: 12px 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 30;
            border: 1.5px solid var(--border);
        }
        .cart-info {
            font-weight: 600;
            font-size: 0.92rem;
            color: var(--text);
        }
        .cart-info .count-num {
            color: var(--primary-dark);
            font-size: 1.1rem;
            font-weight: 700;
        }
        .cart-btn {
            background: linear-gradient(135deg, var(--primary), var(--gold));
            color: #fff;
            border: none;
            padding: 9px 20px;
            border-radius: 22px;
            font-size: 0.88rem;
            cursor: pointer;
            font-weight: 600;
            box-shadow: 0 2px 10px rgba(255, 145, 164, 0.3);
        }

        .modal {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(107, 84, 89, 0.45);
            backdrop-filter: blur(4px);
            z-index: 100;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.2s;
        }
        .modal.active { display: flex; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-content {
            background: #fff;
            border-radius: 24px;
            padding: 22px;
            width: 100%;
            max-width: 400px;
            max-height: 82vh;
            overflow-y: auto;
            animation: slideUp 0.25s;
        }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .modal h3 {
            margin-bottom: 14px;
            text-align: center;
            color: var(--text);
            font-size: 1.1rem;
        }

        .cart-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #f8eef1;
        }
        .cart-item:last-child { border-bottom: none; }
        .cart-item-name {
            flex: 1;
            font-size: 0.9rem;
            color: var(--text);
        }
        .cart-item-controls {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .qty-btn {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: none;
            background: var(--secondary);
            color: var(--primary-dark);
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .qty-num {
            min-width: 24px;
            text-align: center;
            font-weight: 700;
            font-size: 0.95rem;
        }
        .remove-btn {
            background: none;
            border: none;
            color: #e88;
            cursor: pointer;
            font-size: 1.1rem;
            padding: 2px 4px;
        }

        .submit-btn {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 16px;
            background: linear-gradient(135deg, var(--primary), var(--gold));
            color: #fff;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            margin-top: 14px;
            box-shadow: 0 3px 12px rgba(255, 145, 164, 0.3);
        }
        .submit-btn.secondary {
            background: var(--secondary);
            color: var(--primary-dark);
            margin-top: 8px;
            box-shadow: none;
        }
        textarea {
            width: 100%;
            padding: 12px;
            border-radius: 14px;
            border: 1.5px solid var(--border);
            resize: vertical;
            min-height: 56px;
            font-family: inherit;
            margin-top: 10px;
            font-size: 0.88rem;
            color: var(--text);
            outline: none;
        }
        textarea:focus { border-color: var(--primary); }
        textarea::placeholder { color: #d4b8c0; }

        .hidden { display: none !important; }
        .loading {
            text-align: center;
            padding: 30px 20px;
            color: var(--text-light);
            font-size: 0.9rem;
        }
        .empty-state {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-light);
        }
        .empty-state .emoji {
            font-size: 3rem;
            margin-bottom: 10px;
        }

        .plan-date-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 4px;
        }
        .plan-date-btn {
            background: #fff;
            border: 1.5px solid var(--border);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            font-size: 1rem;
            cursor: pointer;
            color: var(--primary-dark);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .plan-date-display {
            font-weight: 700;
            font-size: 1.05rem;
            color: var(--text);
        }
        .meal-section {
            background: #fff;
            border-radius: 18px;
            padding: 14px 16px;
            margin-bottom: 12px;
            box-shadow: var(--shadow);
        }
        .meal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        .meal-title {
            font-weight: 700;
            font-size: 0.95rem;
            color: var(--text);
        }
        .meal-dishes {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .meal-dish-tag {
            background: var(--secondary);
            padding: 5px 12px;
            border-radius: 14px;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--text);
        }
        .meal-dish-tag .remove-plan {
            cursor: pointer;
            color: #d4a0a8;
            font-weight: bold;
            font-size: 0.9rem;
        }
        .add-plan-btn {
            background: none;
            border: 1.5px dashed var(--border);
            border-radius: 12px;
            padding: 5px 12px;
            font-size: 0.78rem;
            color: var(--text-light);
            cursor: pointer;
        }
        .add-plan-btn:active {
            border-color: var(--primary);
            color: var(--primary-dark);
        }

        .random-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 30px 16px;
        }
        .random-result {
            width: 100%;
            max-width: 320px;
            background: #fff;
            border-radius: 24px;
            padding: 28px 20px;
            text-align: center;
            box-shadow: var(--shadow);
            margin-bottom: 20px;
        }
        .random-result .placeholder {
            width: 140px;
            height: 140px;
            margin: 0 auto 14px;
            border-radius: 20px;
            background: linear-gradient(135deg, #fff0f6, #fff7d6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3.2rem;
        }
        .random-result img {
            width: 140px;
            height: 140px;
            object-fit: cover;
            border-radius: 20px;
            margin: 0 auto 14px;
            display: block;
        }
        .random-dish-name {
            font-size: 1.35rem;
            font-weight: 700;
            margin-bottom: 6px;
            color: var(--text);
        }
        .random-dish-category {
            color: var(--text-light);
            font-size: 0.85rem;
        }
        .random-dish-desc {
            color: var(--text-light);
            font-size: 0.8rem;
            margin-top: 8px;
            line-height: 1.4;
        }
        .random-btns {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .random-btn {
            padding: 12px 22px;
            border-radius: 24px;
            border: none;
            background: linear-gradient(135deg, var(--primary), var(--gold));
            color: #fff;
            font-size: 0.9rem;
            cursor: pointer;
            font-weight: 600;
            box-shadow: 0 3px 12px rgba(255, 145, 164, 0.3);
        }
        .random-btn.secondary {
            background: #fff;
            color: var(--primary-dark);
            border: 1.5px solid var(--border);
            box-shadow: none;
        }

        .dish-detail-img {
            width: 100%;
            aspect-ratio: 16/10;
            object-fit: cover;
            border-radius: 16px;
            margin-bottom: 14px;
        }
        .dish-detail-placeholder {
            width: 100%;
            aspect-ratio: 16/10;
            background: linear-gradient(135deg, #fff0f6, #fff7d6);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            margin-bottom: 14px;
        }
        .dish-detail-name {
            font-size: 1.25rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 6px;
        }
        .detail-row {
            margin: 10px 0;
            font-size: 0.88rem;
            line-height: 1.5;
        }
        .detail-label {
            font-weight: 600;
            color: var(--primary-dark);
            display: inline-block;
            margin-right: 6px;
        }

        .toast {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(107, 84, 89, 0.85);
            color: #fff;
            padding: 12px 24px;
            border-radius: 16px;
            font-size: 0.9rem;
            z-index: 200;
            animation: toastIn 0.2s;
            pointer-events: none;
        }
        @keyframes toastIn {
            from { opacity: 0; transform: translate(-50%, -40%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }

        .success-modal .modal-content {
            text-align: center;
            padding: 26px 22px;
        }
        .cooking-img {
            width: 220px;
            max-width: 70%;
            border-radius: 20px;
            margin: 0 auto 14px;
            display: block;
            box-shadow: 0 6px 20px rgba(255, 182, 193, 0.35);
            animation: cookingBounce 1.2s infinite ease-in-out;
        }
        @keyframes cookingBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.04); }
        }
        .success-text {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--text);
            margin-bottom: 6px;
        }
        .success-sub {
            font-size: 0.82rem;
            color: var(--text-light);
            margin-bottom: 14px;
        }
    </style>
</head>
<body>
    <header>
        <h1>🏯 御膳房</h1>
        <div class="subtitle">小考拉的私人菜单</div>
        <div class="date-info" id="headerDate"></div>
    </header>

    <div class="main-tabs">
        <button class="main-tab active" data-view="menu">📖 菜单</button>
        <button class="main-tab" data-view="plan">📅 饮食计划</button>
        <button class="main-tab" data-view="random">🎲 随机点菜</button>
    </div>

    <div class="search-bar" id="searchBar">
        <input type="text" class="search-input" placeholder="🔍 搜索想吃的菜..." id="searchInput">
    </div>

    <div id="menuView">
        <div class="category-tabs" id="categoryTabs"></div>
        <div class="menu-container" id="menuContainer">
            <div class="loading">🍳 大厨正在备菜中...</div>
        </div>
    </div>

    <div id="planView" class="menu-container hidden">
        <div class="plan-date-nav">
            <button class="plan-date-btn" id="prevDayBtn">‹</button>
            <span class="plan-date-display" id="planDateDisplay"></span>
            <button class="plan-date-btn" id="nextDayBtn">›</button>
        </div>
        <div id="planContent">
            <div class="loading">加载中...</div>
        </div>
    </div>

    <div id="randomView" class="menu-container hidden">
        <div class="random-container">
            <div class="random-result" id="randomResult">
                <div class="placeholder">🎲</div>
                <div class="random-dish-name">点击下方按钮</div>
                <div class="random-dish-category">今天吃什么？交给命运决定</div>
            </div>
            <div class="random-btns">
                <button class="random-btn" id="randomBtn">🎲 随机点菜</button>
                <button class="random-btn secondary" id="randomAddBtn">➕ 加入点菜单</button>
            </div>
            <p style="color:var(--text-light);font-size:0.78rem;margin-top:16px;">选择困难症救星 ✨</p>
        </div>
    </div>

    <div class="cart-bar" id="cartBar">
        <div class="cart-info">🛒 <span class="count-num" id="cartCount">0</span> 道菜</div>
        <button class="cart-btn" id="openCartBtn">查看点菜单</button>
    </div>

    <div class="modal" id="cartModal">
        <div class="modal-content">
            <h3>🛒 我的点菜单</h3>
            <div id="cartItems"></div>
            <textarea id="orderMessage" placeholder="给大厨留言...（比如：少放辣椒、不要香菜）"></textarea>
            <button class="submit-btn" id="submitOrderBtn">提交订单 💌</button>
            <button class="submit-btn secondary" id="closeCartBtn">继续点菜</button>
        </div>
    </div>

    <div class="modal" id="dishSelectModal">
        <div class="modal-content">
            <h3>选择菜式</h3>
            <div id="dishSelectList"></div>
            <button class="submit-btn secondary" id="closeDishSelectBtn">取消</button>
        </div>
    </div>

    <div class="modal" id="dishDetailModal">
        <div class="modal-content">
            <div id="dishDetailContent"></div>
            <div style="display:flex;gap:10px;margin-top:16px;">
                <button class="submit-btn secondary" style="flex:1;margin-top:0" id="closeDetailBtn">关闭</button>
                <button class="submit-btn" style="flex:1;margin-top:0" id="addFromDetailBtn">➕ 想吃</button>
            </div>
        </div>
    </div>

    <div class="modal success-modal" id="successModal">
        <div class="modal-content">
            <img class="cooking-img" id="cookingImg" src="https://aka.doubaocdn.com/s/yn9W1vjwVQ?alice_filename=koala_cooking_pink_gold_animated_1.png" alt="小考拉正在炒菜">
            <div class="success-text">我爱看电视正在为您上菜</div>
            <div class="success-sub">小考拉大厨正在加急烹饪中 💕</div>
            <button class="submit-btn" id="closeSuccessBtn">我知道啦</button>
        </div>
    </div>

    <script>
        const SUPABASE_URL = 'https://jbtmttebvkigrbhlhwxd.supabase.co';
        const SUPABASE_ANON_KEY = 'sb_publishable_DfCkBqb2QwD1CSRZ1gsalw_NFDMBhq1';

        let categories = [];
        let dishes = [];
        let currentCategory = 'all';
        let cart = [];
        let currentView = 'menu';
        let planDate = new Date();
        let mealPlans = [];
        let pendingPlanMealType = null;
        let randomDish = null;
        let currentDetailDish = null;
        let searchKeyword = '';

        const API_HEADERS = {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        };

        async function init() {
            renderHeaderDate();
            setInterval(renderHeaderDate, 60000);
            await Promise.all([loadCategories(), loadDishes(), loadMealPlans()]);
            renderCategories();
            renderDishes();
            renderPlan();
            updateCartBar();
            setupEventListeners();
        }

        function renderHeaderDate() {
            const now = new Date();
            const weekArr = ['周日','周一','周二','周三','周四','周五','周六'];
            const m = now.getMonth() + 1;
            const d = now.getDate();
            const w = weekArr[now.getDay()];
            const h = String(now.getHours()).padStart(2,'0');
            const min = String(now.getMinutes()).padStart(2,'0');
            document.getElementById('headerDate').textContent = `${m}月${d}日 ${w} ${h}:${min}`;
        }

        async function loadCategories() {
            try {
                const res = await fetch(`${SUPABASE_URL}/rest/v1/categories?select=*&order=sort_order.asc`, { headers: API_HEADERS });
                if (res.ok) categories = await res.json();
            } catch(e) { console.warn('加载分类失败', e); }
        }

        async function loadDishes() {
            try {
                const res = await fetch(`${SUPABASE_URL}/rest/v1/dishes?select=*,categories(name)&is_available=eq.true&order=sort_order.asc`, { headers: API_HEADERS });
                if (res.ok) dishes = await res.json();
            } catch(e) { console.warn('加载菜品失败', e); }
        }

        async function loadMealPlans() {
            try {
                const dateStr = formatDate(planDate);
                const res = await fetch(`${SUPABASE_URL}/rest/v1/meal_plans?select=*,dishes(*)&plan_date=eq.${dateStr}`, { headers: API_HEADERS });
                if (res.ok) mealPlans = await res.json();
                else mealPlans = [];
            } catch(e) { mealPlans = []; }
        }

        function formatDate(d) {
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${y}-${m}-${day}`;
        }

        function showToast(msg) {
            const old = document.querySelector('.toast');
            if (old) old.remove();
            const t = document.createElement('div');
            t.className = 'toast';
            t.textContent = msg;
            document.body.appendChild(t);
            setTimeout(() => t.remove(), 1800);
        }

        function setupEventListeners() {
            document.querySelectorAll('.main-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    currentView = tab.dataset.view;
                    document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    document.getElementById('menuView').classList.toggle('hidden', currentView !== 'menu');
                    document.getElementById('planView').classList.toggle('hidden', currentView !== 'plan');
                    document.getElementById('randomView').classList.toggle('hidden', currentView !== 'random');
                    document.getElementById('searchBar').classList.toggle('hidden', currentView !== 'menu');
                    if (currentView === 'plan') renderPlan();
                });
            });

            document.getElementById('searchInput').addEventListener('input', (e) => {
                searchKeyword = e.target.value.trim().toLowerCase();
                renderDishes();
            });

            document.getElementById('openCartBtn').addEventListener('click', () => {
                renderCartItems();
                document.getElementById('cartModal').classList.add('active');
            });
            document.getElementById('closeCartBtn').addEventListener('click', () => {
                document.getElementById('cartModal').classList.remove('active');
            });
            document.getElementById('submitOrderBtn').addEventListener('click', submitOrder);

            document.getElementById('randomBtn').addEventListener('click', doRandomPick);
            document.getElementById('randomAddBtn').addEventListener('click', () => {
                if (randomDish) { addToCart(randomDish.id, randomDish.name); }
                else showToast('先点随机点菜哦～');
            });

            document.getElementById('prevDayBtn').addEventListener('click', () => {
                planDate.setDate(planDate.getDate() - 1);
                loadMealPlans().then(() => renderPlan());
            });
            document.getElementById('nextDayBtn').addEventListener('click', () => {
                planDate.setDate(planDate.getDate() + 1);
                loadMealPlans().then(() => renderPlan());
            });

            document.getElementById('closeDishSelectBtn').addEventListener('click', () => {
                document.getElementById('dishSelectModal').classList.remove('active');
            });

            document.getElementById('closeDetailBtn').addEventListener('click', () => {
                document.getElementById('dishDetailModal').classList.remove('active');
            });
            document.getElementById('addFromDetailBtn').addEventListener('click', () => {
                if (currentDetailDish) {
                    addToCart(currentDetailDish.id, currentDetailDish.name);
                    document.getElementById('dishDetailModal').classList.remove('active');
                }
            });

            document.getElementById('closeSuccessBtn').addEventListener('click', () => {
                document.getElementById('successModal').classList.remove('active');
            });

            document.querySelectorAll('.modal').forEach(m => {
                m.addEventListener('click', (e) => {
                    if (e.target === m) m.classList.remove('active');
                });
            });
        }

        function renderCategories() {
            const tabs = document.getElementById('categoryTabs');
            let html = `<button class="category-tab ${currentCategory==='all'?'active':''}" data-cat="all">全部</button>`;
            categories.forEach(cat => {
                html += `<button class="category-tab ${currentCategory==cat.id?'active':''}" data-cat="${cat.id}">${cat.name}</button>`;
            });
            tabs.innerHTML = html;
            tabs.querySelectorAll('.category-tab').forEach(btn => {
                btn.addEventListener('click', () => {
                    currentCategory = btn.dataset.cat === 'all' ? 'all' : parseInt(btn.dataset.cat);
                    renderCategories();
                    renderDishes();
                });
            });
        }

        function renderDishes() {
            const container = document.getElementById('menuContainer');
            let filtered = currentCategory === 'all' ? dishes : dishes.filter(d => d.category_id === currentCategory);
            if (searchKeyword) {
                filtered = filtered.filter(d =>
                    d.name.toLowerCase().includes(searchKeyword) ||
                    (d.description && d.description.toLowerCase().includes(searchKeyword)) ||
                    (d.ingredients && d.ingredients.toLowerCase().includes(searchKeyword))
                );
            }
            if (filtered.length === 0) {
                container.innerHTML = `<div class="empty-state"><div class="emoji">🍽️</div><div>暂无菜式，御膳房待更新～</div></div>`;
                return;
            }
            let html = '<div class="dish-grid">';
            filtered.forEach(dish => {
                const imageHtml = dish.image_url
                    ? `<img src="${dish.image_url}" alt="${dish.name}" loading="lazy">`
                    : `<div class="placeholder">🍽️</div>`;
                const tagsHtml = dish.tags ? `<div class="dish-tags">${dish.tags.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join('')}</div>` : '';
                const ingredientsHtml = dish.ingredients ? `<div class="dish-ingredients">🥬 ${dish.ingredients}</div>` : '';
                const cookCount = (dish.cook_count && dish.cook_count > 0) ? `<span class="cook-count">🔥 已做 ${dish.cook_count} 次</span>` : '';
                html += `
                    <div class="dish-card" data-id="${dish.id}">
                        ${imageHtml}
                        <div class="dish-name">${dish.name}</div>
                        ${tagsHtml}
                        ${ingredientsHtml}
                        ${cookCount}
                        <button class="add-btn" data-id="${dish.id}" data-name="${dish.name}">➕ 想吃</button>
                    </div>
                `;
            });
            html += '</div>';
            container.innerHTML = html;

            container.querySelectorAll('.dish-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    if (e.target.classList.contains('add-btn')) return;
                    const id = parseInt(card.dataset.id);
                    const dish = dishes.find(d => d.id === id);
                    if (dish) showDishDetail(dish);
                });
            });
            container.querySelectorAll('.add-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    addToCart(parseInt(btn.dataset.id), btn.dataset.name);
                });
            });
        }

        function showDishDetail(dish) {
            currentDetailDish = dish;
            const imageHtml = dish.image_url
                ? `<img class="dish-detail-img" src="${dish.image_url}" alt="${dish.name}">`
                : `<div class="dish-detail-placeholder">🍽️</div>`;
            const tagsHtml = dish.tags ? dish.tags.split(',').map(t => `<span class="tag">${t.trim()}</span>`).join(' ') : '';
            const catName = dish.categories ? dish.categories.name : '';
            document.getElementById('dishDetailContent').innerHTML = `
                ${imageHtml}
                <div class="dish-detail-name">${dish.name}</div>
                <div style="text-align:center;margin-bottom:10px;">${tagsHtml}</div>
                ${dish.description ? `<div class="detail-row"><span class="detail-label">📝 介绍</span>${dish.description}</div>` : ''}
                ${dish.ingredients ? `<div class="detail-row"><span class="detail-label">🥬 食材</span>${dish.ingredients}</div>` : ''}
                ${catName ? `<div class="detail-row"><span class="detail-label">📂 分类</span>${catName}</div>` : ''}
                ${dish.cook_count > 0 ? `<div class="detail-row"><span class="detail-label">🔥 已做</span>${dish.cook_count} 次</div>` : ''}
            `;
            document.getElementById('dishDetailModal').classList.add('active');
        }

        function renderPlan() {
            document.getElementById('planDateDisplay').textContent = formatDate(planDate);
            const container = document.getElementById('planContent');
            const meals = [
                { type: 'breakfast', label: '🌅 早餐' },
                { type: 'lunch', label: '☀️ 午餐' },
                { type: 'dinner', label: '🌙 晚餐' }
            ];
            let html = '';
            meals.forEach(meal => {
                const planItems = mealPlans.filter(p => p.meal_type === meal.type);
                html += `
                    <div class="meal-section">
                        <div class="meal-header">
                            <span class="meal-title">${meal.label}</span>
                            <button class="add-plan-btn" data-meal-type="${meal.type}">+ 添加菜式</button>
                        </div>
                        <div class="meal-dishes">
                            ${planItems.length > 0 ? planItems.map(p => `
                                <span class="meal-dish-tag">
                                    ${p.dishes ? p.dishes.name : '未知菜式'}
                                    <span class="remove-plan" data-plan-id="${p.id}">✕</span>
                                </span>
                            `).join('') : '<span style="color:var(--text-light);font-size:0.8rem;">暂无安排</span>'}
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;

            container.querySelectorAll('.add-plan-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    pendingPlanMealType = btn.dataset.mealType;
                    showDishSelectModal();
                });
            });
            container.querySelectorAll('.remove-plan').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const planId = parseInt(btn.dataset.planId);
                    try {
                        await fetch(`${SUPABASE_URL}/rest/v1/meal_plans?id=eq.${planId}`, { method: 'DELETE', headers: API_HEADERS });
                    } catch(e) {}
                    await loadMealPlans();
                    renderPlan();
                });
            });
        }

        function showDishSelectModal() {
            const list = document.getElementById('dishSelectList');
            if (dishes.length === 0) {
                list.innerHTML = '<div class="loading">暂无菜式</div>';
            } else {
                let html = '';
                dishes.forEach(dish => {
                    html += `
                        <div class="cart-item">
                            <div class="cart-item-name">${dish.name}</div>
                            <button class="add-btn" style="width:auto;padding:5px 14px;" data-dish-id="${dish.id}" data-dish-name="${dish.name}">选择</button>
                        </div>
                    `;
                });
                list.innerHTML = html;
            }
            list.querySelectorAll('.add-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const dishId = parseInt(btn.dataset.dishId);
                    const dateStr = formatDate(planDate);
                    try {
                        await fetch(`${SUPABASE_URL}/rest/v1/meal_plans`, {
                            method: 'POST',
                            headers: { ...API_HEADERS, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
                            body: JSON.stringify({ plan_date: dateStr, meal_type: pendingPlanMealType, dish_id: dishId })
                        });
                    } catch(e) {}
                    document.getElementById('dishSelectModal').classList.remove('active');
                    await loadMealPlans();
                    renderPlan();
                    showToast('已添加到饮食计划 ✨');
                });
            });
            document.getElementById('dishSelectModal').classList.add('active');
        }

        function doRandomPick() {
            if (dishes.length === 0) { showToast('菜单还没有菜哦～'); return; }
            const randomIndex = Math.floor(Math.random() * dishes.length);
            randomDish = dishes[randomIndex];
            const result = document.getElementById('randomResult');
            const imageHtml = randomDish.image_url
                ? `<img src="${randomDish.image_url}" alt="${randomDish.name}">`
                : `<div class="placeholder">🍽️</div>`;
            const categoryName = randomDish.categories ? randomDish.categories.name : '';
            const desc = randomDish.description ? `<div class="random-dish-desc">${randomDish.description}</div>` : '';
            result.innerHTML = `
                ${imageHtml}
                <div class="random-dish-name">${randomDish.name}</div>
                <div class="random-dish-category">${categoryName}</div>
                ${desc}
            `;
        }

        function addToCart(id, name) {
            const existing = cart.find(item => item.id === id);
            if (existing) existing.qty += 1;
            else cart.push({ id, name, qty: 1 });
            updateCartBar();
            showToast(`已添加「${name}」💕`);
        }

        function updateCartBar() {
            document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
        }

        function renderCartItems() {
            const container = document.getElementById('cartItems');
            if (cart.length === 0) {
                container.innerHTML = '<div class="empty-state"><div class="emoji">🛒</div><div style="font-size:0.88rem;">还没有点菜哦～</div></div>';
                return;
            }
            let html = '';
            cart.forEach((item, index) => {
                html += `
                    <div class="cart-item">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-controls">
                            <button class="qty-btn" data-index="${index}" data-action="minus">−</button>
                            <span class="qty-num">${item.qty}</span>
                            <button class="qty-btn" data-index="${index}" data-action="plus">+</button>
                            <button class="remove-btn" data-index="${index}" data-action="remove">✕</button>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
            container.querySelectorAll('.qty-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.index);
                    if (btn.dataset.action === 'plus') cart[idx].qty += 1;
                    else {
                        cart[idx].qty -= 1;
                        if (cart[idx].qty <= 0) cart.splice(idx, 1);
                    }
                    renderCartItems();
                    updateCartBar();
                });
            });
            container.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    cart.splice(parseInt(btn.dataset.index), 1);
                    renderCartItems();
                    updateCartBar();
                });
            });
        }

        async function submitOrder() {
            if (cart.length === 0) { showToast('请先添加想吃的菜～'); return; }
            const btn = document.getElementById('submitOrderBtn');
            btn.textContent = '提交中...';
            btn.disabled = true;
            const message = document.getElementById('orderMessage').value.trim();
            try {
                await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
                    method: 'POST',
                    headers: { ...API_HEADERS, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
                    body: JSON.stringify({
                        items: cart.map(item => ({ dish_id: item.id, name: item.name, qty: item.qty })),
                        message: message
                    })
                });
                for (const item of cart) {
                    const dish = dishes.find(d => d.id === item.id);
                    if (dish) {
                        const newCount = (dish.cook_count || 0) + item.qty;
                        try {
                            await fetch(`${SUPABASE_URL}/rest/v1/dishes?id=eq.${item.id}`, {
                                method: 'PATCH',
                                headers: { ...API_HEADERS, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
                                body: JSON.stringify({ cook_count: newCount })
                            });
                        } catch(e) {}
                    }
                }
                try {
                    await fetch('/api/notify', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ items: cart, message })
                    });
                } catch(e) {}

                document.getElementById('cartModal').classList.remove('active');
                cart = [];
                document.getElementById('orderMessage').value = '';
                updateCartBar();
                await loadDishes();
                renderDishes();

                document.getElementById('successModal').classList.add('active');
            } catch (err) {
                console.error(err);
                showToast('提交失败，请稍后再试');
            } finally {
                btn.textContent = '提交订单 💌';
                btn.disabled = false;
            }
        }

        init();
    </script>
</body>
</html>
