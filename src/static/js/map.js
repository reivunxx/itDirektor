$(document).ready(function () {
    if ($('.map-block').length != 0) {
        let map = L.map('map', {
            gestureHandling: true
        }).setView([48.6162737, 43.7810891], 8);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);


        //СОздаем кластер точек
        let markers = L.markerClusterGroup();

        for (pointCounter = 0; pointCounter < mapPoints.length; pointCounter++) {
            let id = pointCounter;
            let coords = mapPoints[pointCounter].coords.split(','); //Разделяем координаты из строки
            let thisMarker = L.marker(coords, {
                icon: L.icon({
                    iconUrl: mapPoints[pointCounter].iconURL,
                    iconSize: [24, 24], // size of the icon
                    iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
                })
            });  //Создаем новый маркер
            thisMarker.on('click', function () {
                buildPopup(mapPoints[id]);
            });

            markers.addLayer(thisMarker)  //Добавляем текущий маркер на слой кластера
        }

        //Добавляем кластер на карту
        map.addLayer(markers);


        function buildPopup(data) {
            $('.map-popup').removeClass('active')
            setTimeout(function () {
                let img = $('.map-popup__img')
                let title = $('.map-popup__title')
                let rating = $('.map-popup__rating span')
                let ratingBlock = $('.map-popup__rating, .map-popup__review-counter')
                let reviewCounter = $('.map-popup__review-counter')
                let priceParent = $('.map-popup__price')
                let price = $('.map-popup__price p')
                let desc = $('.map-popup__desc')
                let tags = $('.map-popup__tags')
                let address = $('.map-popup__adress span')
                let buildTrack = $('.map-popup__build-track')
                let link = $('.map-popup__show-more .linkButton')

                //Подгрузка по API
                title.html(data.name);
                rating.html(data.rating);

                if (data.reviewCount == '') {
                    ratingBlock.css('display', 'none')
                }
                else {
                    ratingBlock.css('display', 'flex')
                }

                reviewCounter.html(data.reviewCount + ' отзывов')
                img.attr('src', data.imgUrl);
                desc.html(data.text);

                if (data.address.length > 0) {
                    address.parent().show()
                    address.html(data.address);
                } else {
                    address.parent().hide()
                }

                price.html(data.price);
                if (data.price == '') {
                    priceParent.css('display', 'none')
                } else {
                    priceParent.css('display', 'flex')
                }
                link.attr('href', data.link);
                tags.html('');
                for (let i = 0; i < data["tags"].length; i++) {
                    tags.append('<div class="map-popup__post-tag">\n' +
                        '              <div style="-webkit-mask: url(' + data["tags"][i][1] + ') center no-repeat" class="map-popup__icon-tag">\n' +
                        '              </div><span>' + data["tags"][i][0] + '</span>\n' +
                        '            </div>')
                }
                buildTrack.attr('href', 'https://maps.google.com?saddr=Current+Location&daddr=' + data.coords)
            }, 300)

            setTimeout(function () {
                $('.map-popup').addClass('active')
            }, 300);
        }

        $('.map-popup__close-btn').click(function () {
            $('.map-popup').toggleClass('active')
        })
    }
})