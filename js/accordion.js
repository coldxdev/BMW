document.addEventListener('DOMContentLoaded', () => {

    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');


    featureLinkElems.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            
            // * Second click on button hide
            if (btn.classList.contains('feature__link_active')) {
                featureSubElems[i].classList.add('hidden');
                btn.classList.remove('feature__link_active');
            }
            // * Hide other element
            else {
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden');
                })

                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active')
                })
            // * Display active tab
                featureSubElems[i].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            }

        })
    })


})