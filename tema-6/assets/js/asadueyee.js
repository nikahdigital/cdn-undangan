
$(document).ready(function() {
      const coupleNames = "Dewi & Dary";
      
  // Populate the data using jQuery
  $('#wedding-label').text('The Wedding');
            $('#couple-names').text(coupleNames);
            $('#wedding-date').text('31 Desember 2023');
            $('#guest-name').text('Nama Tamu Anda');
            $('#apology-message').text('Mohon maaf apabila ada kesalahan dalam penulisan nama/gelar.');
            $('#invitation-button').html('<i class="fas fa-envelope m-r-5"></i>Buka Undangan');
            $('#footer-message').text('Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di Acara Pernikahan Kami.');


             $('#hero-title').text('The Wedding');
        $('#hero-img').attr('src', 'assets/img/pr.png');
        $('#hero-photo-container').css('background-image', "url('assets/img/profil.jpg')");
        $('#hero-couple').text(coupleNames);
        $('#hero-day').text('- Minggu -');
        $('#hero-date').text('31 Desember 2024');


        const future = new Date("2026-06-28T08:00:00").getTime();





        $('#intro-greeting').text('Assalamualaikum Wr. Wb.');
        $('#intro-message').text('Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu dan Saudara/i menghadiri acara Pernikahan kami');
        $('#section-title').text('Kedua Mempelai');

        $('#bride-photo-container').css('background-image', "url('assets/img/profil.jpg')");
        $('#bride-name').text('Dewi Nurhaliza Putri');
        $('#bride-parents').text('Putri dari Bapak Budi & Ibu Fitri Ayu');
        $('#bride-social-links').html(`
            <a href="#" class="m-t-15" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="#" class="m-t-15" target="_blank"><i class="fab fa-instagram-square"></i></a>
            <a href="#" class="m-t-15" target="_blank"><i class="fab fa-twitter-square"></i></a>
        `);

        $('#groom-photo-container').css('background-image', "url('assets/img/profil.jpg')");
        $('#groom-name').text('Dary Fajrin Maulana');
        $('#groom-parents').text('Putra dari Bapak Suryadi & Ibu Yuliana');
        $('#groom-social-links').html(`
            <a href="#" class="m-t-15" target="_blank"><i class="fab fa-facebook-square"></i></a>
            <a href="#" class="m-t-15" target="_blank"><i class="fab fa-instagram-square"></i></a>
            <a href="#" class="m-t-15" target="_blank"><i class="fab fa-twitter-square"></i></a>
        `);

        $('#divider-symbol').text('- & -');




        $('#akad-label').text('Akad Nikah');
      $('#akad-day').text('Minggu');
      $('#akad-date').text('31 Desember 2023');
      $('#akad-time').text('08:00 WIB');
      $('#akad-location').text('Masjid Al-Aqsha Peraksangkal Jonggrangan Kabupaten Klaten');
      $('#akad-direction-link').attr('href', 'https://www.google.com/maps/dir/?api=1&destination=Masjid+Al-Aqsha+Peraksangkal+Jonggrangan+Kabupaten+Klaten');

      // Populate Resepsi section
      $('#resepsi-label').text('Resepsi');
      $('#resepsi-day').text('Minggu');
      $('#resepsi-date').text('31 Desember 2023');
      $('#resepsi-time').text('08:00 WIB s/d Selesai');
      $('#resepsi-location').text('Jln Tuanku Tambusai, Perumahan Permai Indah, Blok A Nomor 11.');
      $('#resepsi-direction-link').attr('href', 'https://www.google.com/maps/dir/?api=1&destination=Jln+Tuanku+Tambusai,+Perumahan+Permai+Indah,+Blok+A+Nomor+11.');
   


      
                // Data untuk galeri gambar
               const galleryImages = [
    { src: "assets/gallery/1.webp", subtitle: `The Wedding ${coupleNames}` },
    { src: "assets/gallery/2.webp", subtitle: `The Wedding ${coupleNames}` },
    { src: "assets/gallery/3.webp", subtitle: `The Wedding ${coupleNames}` },
    { src: "assets/gallery/4.webp", subtitle: `The Wedding ${coupleNames}` },
    { src: "assets/gallery/5.webp", subtitle: `The Wedding ${coupleNames}` },
    { src: "assets/gallery/6.webp", subtitle: `The Wedding ${coupleNames}` }
];

                // Mengisi data ke elemen dengan ID
                galleryImages.forEach((image) => {
                    const galleryItem = `
                    <a href="${image.src}" class="col-md-4 col-sm-6 aos-item" data-lg-size="1600-2400" data-sub-html="${image.subtitle}"
                        data-aos="zoom-in" data-aos-duration="1000">
                        <img class="img-responsive" src="${image.src}" width="100%">
                    </a>
                    `;
                    $(".galery-fix").append(galleryItem);
                });



                lightGallery(document.getElementById('lightgallery'), {
                    thumbnail: true,
                    download: false
                });




                

       // Love Story Data
        const storyData = [
            {
                title: "First Date",
                date: "01 Januari 2022",
                description: "Pertama kali kami bertemu dan dikenalkan sebagai teman satu kampus dan kebetulan kami masih memiliki cerita masing-masing.",
                image: "assets/story/1.webp"
            },
            {
                title: "Akad Nikah",
                date: "29 Juni 2022",
                description: "Setelah beberapa tahun kami saling kenal, semakin membuat kami yakin satu sama lain untuk melangkah lebih jauh. Sehingga kami yakinkan diri sampai di tahap pelamaran.",
                image: "assets/story/2.webp"
            },
            {
                title: "The Wedding",
                date: "12 September 2022",
                description: "Akhir dari perjalanan pencarian kami masing-masing sampailah pada tahap kami untuk memulai awal cerita kami bersama sebagai keluarga yang In Syaa Allah kami yakin untuk membangunnya bersama. Semoga langkah kami selalu diberkahi dan diridhakan oleh Allah SWT.",
                image: "assets/story/3.webp"
            }
        ];
    
        // Set story title
        $('#story-title').text("Love Story");
    
        // Populate story timeline
        storyData.forEach(item => {
            $('#story-timeline').append(`
                <div class="cd-timeline__block">
                    <div class="cd-timeline__img cd-timeline__img--picture aos-item" data-aos="zoom-in" data-aos-duration="1000">
                        <i class="fas fa-heart c-white"></i>
                    </div>
                    <div class="cd-timeline__content text-component aos-item" data-aos="zoom-in-right" data-aos-duration="1000">
                        <h4 class="common-size-4x">${item.title}</h4>
                        <div class="pic"><img src="${item.image}" class="img-fluid" alt=""></div>
                        <p class="color-contrast-medium m-t-10">${item.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="cd-timeline__date">${item.date}</span>
                        </div>
                    </div>
                </div>
            `);
        });


 //tambahan
    var additionalInfo = 'Dresscode : Hitam Putih<br>Hiburan : Live Music<br>Perjamuan : Prasmanan';
    $('.additional-info').html(additionalInfo);


       
        
    // ========== [8] AMPLOP DIGITAL (REKENING) ==========
    const rekeningList = [
        {
            bankLogo: "assets/img/mandiri.png",
            chipLogo: "https://cdn.jsdelivr.net/gh/nikahdigital/cdn-undangan@main/tema-3/assets/img/chip.webp",
            noRekening: "4555343",
            atasNama: "Putri Cantika Sari"
        }
        // Tambah data rekening lainnya di sini kalo perlu
    ];

    const container = document.getElementById("rekening-container");

    rekeningList.forEach(data => {
        const card = document.createElement("div");
        card.className = "atm-card d-flex justify-content-between align-items-center mb-5";
        card.setAttribute("data-rekening", data.noRekening);

        card.innerHTML = `
        <div class="text-left">
            <img loading="lazy"  src="${data.bankLogo}" alt="Bank Logo" class="bank-logo mb-3">
            <div class="label">No Rekening</div>
            <div class="value">${data.noRekening}</div>
            <div class="label mt-2">Atas Nama</div>
            <div class="name">${data.atasNama}</div>
        </div>
        <div class="text-right d-flex flex-column align-items-end">
            <img loading="lazy"  src="${data.chipLogo}" alt="Chip" class="chip mb-3">
            <button class="btn btn-outline-light btn-sm btn-copy" onclick="copyText(this)">
                <i class="fas fa-copy mr-1"></i> Salin
            </button>
        </div>`;

        container.appendChild(card);
    });





// ========================= 8. Countdown Timer =========================
function updateTimer() {
    const now = new Date().getTime();
    const diff = future - now;

    let d = 0, h = 0, m = 0, s = 0;

    if (diff > 0) {
        d = Math.floor(diff / (1000 * 60 * 60 * 24));
        h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        s = Math.floor((diff % (1000 * 60)) / 1000);
    }

    document.getElementById("timer").innerHTML =
        '<div class="fcommon"><span class="common-size-3x">' + d +
        '</span><span class="fmain">Hari</span></div>' +
        '<div class="fcommon"><span class="common-size-3x">' + h +
        '</span><span class="fmain">Jam</span></div>' +
        '<div class="fcommon"><span class="common-size-3x">' + m +
        '</span><span class="fmain">Menit</span></div>' +
        '<div class="fcommon"><span class="common-size-3x">' + s +
        '</span><span class="fmain">Detik</span></div>';
}

setInterval(updateTimer, 1000);
updateTimer(); // tampilkan langsung saat halaman dimuat
// ========================= END: 8. Countdown Timer =========================


    // 1. Ambil URL saat ini
    var urlParams = new URLSearchParams(window.location.search);

    // 2. Dapatkan nilai parameter 'to'
    var toParam = urlParams.get('to');

    // 3. Tampilkan nilai di elemen <h3> dengan id 'nama'
    if (toParam) {
        $('#nama').text(decodeURIComponent(toParam.replace(/\+/g, ' ')));
    }
});






function copyText(button) {
    const card = button.closest(".atm-card");
    const rekening = card.getAttribute("data-rekening");
    navigator.clipboard.writeText(rekening).then(function () {
        Swal.fire({
            icon: 'success',
            title: 'Disalin!',
            text: 'Nomor rekening berhasil disalin: ' + rekening,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Oke'
        });
    }, function (err) {
        console.error("Gagal menyalin teks: ", err);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Gagal menyalin nomor rekening.',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Coba Lagi'
        });
    });
}



// ========== [9] DATA KADO ==========
const dataKado = {
    nama: "Rudi",
    noHp: "0812-3456-7890",
    alamat: "Jl. Bahagia No. 123, Jakarta Selatan, DKI Jakarta, 12345"
};
// ===================================

// Set ke HTML
document.getElementById("nama-penerima").textContent = dataKado.nama;
document.getElementById("no-hp").textContent = dataKado.noHp;
document.getElementById("alamat").textContent = dataKado.alamat;

function copyKadoInfo() {
    const textToCopy = `${dataKado.nama}\n${dataKado.noHp}\n${dataKado.alamat}`;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Disalin!',
                text: 'Informasi berhasil disalin ke clipboard.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Oke'
            });
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Gagal menyalin informasi.',
                confirmButtonColor: '#d33',
                confirmButtonText: 'Coba Lagi'
            });
        });
}







const scriptURL = 'https://script.google.com/macros/s/AKfycbz9WNSDN8qsnyh-Du1In-2e_VjZImeK6TDxItZw61Tu_iSwhG-KqEYr7AKDYVxIWzcX/exec'


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvpform');
    const submitButton = document.getElementById('btn-rsvp');

    form.addEventListener('submit', e => {
        e.preventDefault();
        submitButton.disabled = true;

        const formData = new FormData(form);

        // Ambil bagian terakhir dari URL path (contoh: 'simple-1')
        const pathParts = window.location.pathname.split('/');
        const kode = pathParts.filter(part => part).pop();
        formData.append('kode', kode); // Masukkan ke dalam FormData

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                Swal.fire({
                    title: 'Terima kasih!',
                    text: 'Formulir Anda telah berhasil dikirim.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    form.reset();
                    submitButton.disabled = false;
                });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Terjadi kesalahan: ' + error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.error('Error!', error.message);
                submitButton.disabled = false;
            });
    });
});



const scriptURLUcapan = 'https://script.google.com/macros/s/AKfycbylzRrHneUlh1GfPNl0ZcgqjKh61LOS91WmsBw-r71ZqIWIg6OZzwzp9h8mWtIF_3L6/exec'



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ucapan');
    const submitButton = document.getElementById('btn-ucapan');

    form.addEventListener('submit', e => {
        e.preventDefault();
        submitButton.disabled = true;

        const formData = new FormData(form);

        // Ambil kode dari URL path (misalnya 'simple-1')
        const pathParts = window.location.pathname.split('/');
        const kode = pathParts.filter(part => part).pop();
        formData.append('kode', kode); // Tambahkan ke FormData

        fetch(scriptURLUcapan, { method: 'POST', body: formData })
            .then(response => {
                Swal.fire({
                    title: 'Terima kasih!',
                    text: 'Formulir Anda telah berhasil dikirim.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    form.reset();
                    submitButton.disabled = false;
                });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Terjadi kesalahan: ' + error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                console.error('Error!', error.message);
                submitButton.disabled = false;
            });
    });
});