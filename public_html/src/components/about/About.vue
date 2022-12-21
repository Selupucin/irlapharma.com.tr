<template>
    <!-- About section start -->
    <section class="about section--nopb">
        <div class="container">
            <div class="about_main d-lg-flex justify-content-between">
                <div class="about_main-content col-lg-6 col-xl-auto">
                    <h2 class="about_main-content_header">
                        İRLA Kimdir?
                    </h2>
                    <p class="about_main-content_text">
                        Vitamin, mineral, multivitamin, bitkisel ve spesifik takviyeleri içeren kaliteli
                        ürünleri ile Türkiye’de kullanıcılarının ilgi ve memnuniyeti ile birlikte sürekli büyüyen,
                        tüketicilerine en yüksek kalitede ürünler sunmayı amaçlayan firmadır.
                    </p>
                </div>
                <div class="about_main-media">
                    <picture>
                        <source data-srcset="@/assets/img/product-3.jpg" srcset="@/assets/img/product-3.jpg" type="image/png" />
                        <img class="lazy" data-src="@/assets/img/product-3.jpg" src="@/assets/img/product-3.jpg" alt="media" />
                    </picture>
                </div>
            </div>
            <ul class="about_numbers d-flex flex-wrap">
                <li class="about_numbers-group col-sm-6 col-lg-3" data-order="1">
                    <div class="wrapper d-flex flex-column align-items-center align-items-sm-start">
                        <span class="countNum number d-flex align-items-center secondary" data-suffix="+"
                            data-value="20">0</span>
                        <p class="number-label">Vitamin ve Mineral Takviyesi</p>
                    </div>
                </li>
                <li class="about_numbers-group col-sm-6 col-lg-3" data-order="2">
                    <div class="wrapper d-flex flex-column align-items-center align-items-sm-start">
                        <span class="countNum number d-flex align-items-center secondary" data-suffix="X"
                            data-value="3">0</span>
                        <p class="number-label">Hızlı etki</p>
                    </div>
                </li>
                <li class="about_numbers-group col-sm-6 col-lg-3" data-order="3">
                    <div class="wrapper d-flex flex-column align-items-center align-items-sm-start">
                        <span class="countNum number d-flex align-items-center secondary" data-suffix="%"
                            data-value="100">0</span>
                        <p class="number-label">Doğal</p>
                    </div>
                </li>
                <li class="about_numbers-group col-sm-6 col-lg-3" data-order="4">
                    <div class="wrapper d-flex flex-column align-items-center align-items-sm-start">
                        <span class="countNum number d-flex align-items-center secondary" data-suffix="K"
                            data-value="11">0</span>
                        <p class="number-label">Satış Rekoru</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    <!-- About section end -->
</template>