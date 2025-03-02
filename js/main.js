'use strict';
{

                    function play() {

                                        setTimeout(() => {
                                                            images[currentIndex].classList.remove("carousel");
                                                            currentIndex++;
                                                            if (currentIndex >= images.length) {
                                                                                currentIndex = 0;
                                                            }
                                                            images[currentIndex].classList.add("carousel");

                                                            play();
                                        }, 4000);
                    }

                    const images = document.querySelectorAll(".photo img");
                    let currentIndex = 0;
                    play();
                    /*busines-card*/
                    document.addEventListener("DOMContentLoaded", () => {
                                        const waterDotsOverlay = document.querySelector("#card1 .water-dots-overlay");

                                        // 水玉を生成する関数
                                        function createWaterDot() {
                                                            const waterDot = document.createElement("div");
                                                            waterDot.classList.add("water-dot");

                                                            // 水玉の位置とサイズをランダムに設定
                                                            waterDot.style.left = `${Math.random() * 100}%`;
                                                            waterDot.style.animationDuration = `${Math.random() * 2 + 20}s`; // 2〜4秒で落下
                                                            waterDot.style.width = waterDot.style.height = `${Math.random() * 10 + 10}px`; // 10〜20pxのランダムサイズ

                                                            waterDotsOverlay.appendChild(waterDot);

                                                            // アニメーション終了後に水玉を削除
                                                            waterDot.addEventListener("animationend", () => {
                                                                                waterDot.remove();
                                                            });
                                        }

                                        // 100msごとに水玉を生成
                                        setInterval(createWaterDot, 600);
                    });
                    /*busines-card-2*/
                    document.addEventListener("DOMContentLoaded", () => {
                                        const cards = document.querySelectorAll(".container");

                                        function getRandomPastelColor() {
                                                            const hue = Math.floor(Math.random() * 31) + 30; // 30°～60°のランダム値
                                                            const saturation = 70 + Math.random() * 20; // 70%～90%
                                                            const lightness = 65 + Math.random() * 20; // 65%～85%
                                                            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
                                        }

                                        cards.forEach((card, index) => {
                                                            setInterval(() => {
                                                                                card.style.backgroundColor = getRandomPastelColor();
                                                            }, 2000 + index * 1000); // 時間差で背景色を変更
                                        });
                    });
                    document.addEventListener('DOMContentLoaded', function () {
                                        const cards = document.querySelectorAll('.business-card');
                                        let activeIndex = 0;

                                        // カードを切り替える関数
                                        function showNextCard() {
                                                            // 現在のアクティブなカードを非表示
                                                            cards[activeIndex].classList.remove('active');

                                                            // 次のカードに切り替え
                                                            activeIndex = (activeIndex + 1) % cards.length; // インデックスを循環
                                                            cards[activeIndex].classList.add('active');
                                        }

                                        // 各カードにクリックイベントを追加
                                        cards.forEach((card) => {
                                                            card.addEventListener('click', showNextCard);
                                        });
                    });

                    document.addEventListener("DOMContentLoaded", function () {
                                        const cards = document.querySelectorAll(".business-card");
                                    
                                        cards.forEach(card => {
                                            const canvas = card.querySelector(".line-canvas");
                                            const ctx = canvas.getContext("2d");
                                    
                                            // Canvas のサイズをカードに合わせる
                                            canvas.width = card.clientWidth;
                                            canvas.height = card.clientHeight;
                                    
                                            // 線のスタイル設定
                                            ctx.strokeStyle = "black";
                                            ctx.lineWidth = 2;
                                    
                                            // 縦線（右側）
                                            ctx.beginPath();
                                            ctx.moveTo(canvas.width - 50, 0);  // 調整: 右端の少し内側
                                            ctx.lineTo(canvas.width -50, canvas.height - 0); // 下端の少し上
                                            ctx.stroke();
                                    
                                            // 横線（下側）
                                            ctx.beginPath();
                                            ctx.moveTo(50, canvas.height - 30); // 調整: 左端の少し内側
                                            ctx.lineTo(canvas.width - 0, canvas.height - 30); // 右端の少し内側
                                            ctx.stroke();
                                        });
                                    });
}