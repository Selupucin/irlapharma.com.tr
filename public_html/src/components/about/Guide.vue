<template>
    <!-- Guide section start -->
    <section class="guide section">
        <div class="container d-flex flex-column-reverse flex-lg-row">
            <div class="guide_media">
                <picture>
                    <source data-srcset="@/assets/img/product-1.jpg" srcset="@/assets/img/product-1.jpg" type="image/webp" />
                    <img class="lazy guide_media-img" data-src="@/assets/img/product-1.jpg" src="@/assets/img/product-1.jpg"
                        alt="media" />
                </picture>
                <span class="underlay">
                    <span class="underlay_circle underlay_circle--accent"></span>
                    <span class="underlay_circle underlay_circle--green"></span>
                </span>
            </div>
            <div class="guide_main col-lg-6 offset-xxl-6">
                <div class="guide_main-header">
                    <h2 class="guide_main-header_title">Nasıl Satın Alabilrim?</h2>
                    <p class="guide_main-header_text">
                        Firmamızın satışı sadece tek bir yerden yapılmaktadır. Farklı sitelerden satışların
                        garantisini vermemekteyiz.
                    </p>
                </div>
                <ul class="guide_main-list">
                    <li class="guide_main-list_item d-flex justify-content-between" data-aos="fade-up">
                        <span class="step d-flex align-items-center justify-content-center">1</span>
                        <div class="wrapper">
                            <h5 class="title">Ürün sekmesine ilerleyin</h5>
                            <p class="text">Ürün sekmesinden Liberox'u inceleyebilirsiniz.</p>
                        </div>
                    </li>
                    <li class="guide_main-list_item d-flex justify-content-between" data-aos="fade-up">
                        <span class="step d-flex align-items-center justify-content-center">2</span>
                        <div class="wrapper">
                            <h5 class="title">Satın al butonuna basın</h5>
                            <p class="text">Sizi Liberox satış mağzamıza yönlendireceğiz.</p>
                        </div>
                    </li>
                    <li class="guide_main-list_item d-flex justify-content-between" data-aos="fade-up">
                        <span class="step d-flex align-items-center justify-content-center">3</span>
                        <div class="wrapper">
                            <h5 class="title">Yönlendirildiğiniz siteden siparişinizi yazın</h5>
                            <p class="text">Siparişinizi oluşturun ve ürünlerinizi 24 saat içerisinde teslimata
                                hazır hale getirelim.</p>
                        </div>
                    </li>
                </ul>
                <div class="guide_main-secondary d-flex flex-column flex-sm-row justify-content-between">
                    <div class="guide_main-secondary_item">
                        <h5 class="title">Hızlı Teslimat Servisi</h5>
                        <p class="text">En hızlı şekilde ürünlerinizi size teslim edeceğimizin sözünü veriyoruz.</p>
                    </div>
                    <div class="guide_main-secondary_item">
                        <h5 class="title">7/24 Destek Hattı</h5>
                        <div class="wrapper d-flex align-items-center">
                            <span class="icon d-flex align-items-center justify-content-center">
                                <i class="icon-call"></i>
                            </span>
                            <div class="wrapper d-flex flex-column">
                                <span>Çağrı Hattı</span>
                                <a class="link" href="tel:+1234567890">+90 500 000 00 00</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Guide section end -->
</template>