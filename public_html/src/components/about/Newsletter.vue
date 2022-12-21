<template>
    <!-- Newsletter section start -->
    <section class="newsletter section">
        <div class="container">
            <div class="wrapper">
                <div class="newsletter_deco">
                    <div class="newsletter_deco-wrapper">
                        <picture>
                            <source data-srcset="@/assets/img/placeholder.jpg" srcset="@/assets/img/placeholder.jpg" type="image/.htmlwebp" />
                            <img class="lazy leaf leaf--left" data-src="@/assets/img/placeholder.jpg" src="@/assets/img/placeholder.jpg"
                                alt="deco" />
                        </picture>
                    </div>
                    <div class="newsletter_deco-wrapper">
                        <picture>
                            <source data-srcset="@/assets/img/placeholder.jpg" srcset="@/assets/img/placeholder.jpg" type="image/webp" />
                            <img class="lazy leaf leaf--right" data-src="@/assets/img/placeholder.jpg" src="@/assets/img/placeholder.jpg"
                                alt="deco" />
                        </picture>
                    </div>
                </div>
                <div class="newsletter_highlight">
                    <span class="underlay underlay--left">
                        <span class="underlay_circle underlay_circle--accent"></span>
                    </span>
                    <span class="underlay underlay--right">
                        <span class="underlay_circle underlay_circle--small underlay_circle--green"></span>
                        <span class="underlay_circle underlay_circle--big underlay_circle--green"></span>
                    </span>
                </div>
                <div class="newsletter_content">
                    <div class="newsletter_header">
                        <h2 class="newsletter_header-title">Yenilikleri Takipte Kalın</h2>
                        <p class="newsletter_header-text">
                            Yeni içeriklerimizi takipte kalabilir ve anında haberdar olabilirsiniz.
                        </p>
                    </div>
                    <form class="newsletter_form d-sm-flex" data-type="newsletter" action="#" method="post">
                        <input class="newsletter_form-field field required" type="text" data-type="email"
                            placeholder="Email" />
                        <button class="newsletter_form-btn btn" type="submit">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- Newsletter section end -->
</template>