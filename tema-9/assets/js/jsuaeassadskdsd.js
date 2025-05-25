  $(document).ready(function(){

    //DATA EDIT

  //DATA YANG HARUS DI EDIT
  //cara mematikan jika tidak pakai
  // $('#info').addClass('d-none');
  // $('#gallery').addClass('d-none');
  // $('#story').addClass('d-none');
  // $('#amplop').addClass('d-none');
  // $('#kado').addClass('d-none');

  //END

    $("#loader-wrapper").css({
    background: 'url("assets/img/cover.jpg") center center no-repeat',
    "background-size": "cover",
  });

  $(".hero-ucapan").css("background", 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 70%), url("./assets/img/ft.jpg")');

   // ======== START: Data Awal & Judul Halaman ========
const profilePhotoUrl = "assets/img/profil.jpg"; // gambar profil pasangan
const  coupleNames ="Dewi & Dary";
  


       // Set value menggunakan jQuery
     $('.title-1').text('The Wedding');
     $('.title-2').text(coupleNames);
     $('.title-3').text('31 Desember 2023');
     $('.title-4 p').html('Kepada Yth. <br>Bapak/Ibu/Saudara/i');
     $('.title-5 p').text('Mohon maaf apabila ada kesalahan dalam penulisan nama/gelar.');
     $('.title-6 p').text('Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di Acara Pernikahan Kami.');

     //home
     $('.ftitle-home').text('The Wedding');
       
         $('.image-container-home').attr('src', 'assets/img/profil.jpg');
         $('.image-container2-home').attr('src', 'assets/img/profil.jpg');
         $('.fcover-home').text(coupleNames);
         $('.event-day-home').text('- Minggu -');
         $('.event-date-home').text('31 Desember 2023');
  const future = new Date("2026-06-28T08:00:00").getTime();



         //mempelai
         $('.greeting').text('Assalamualaikum Wr. Wb.');
         $('.invitation-message').text('Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu dan Saudara/i menghadiri acara Pernikahan kami');
         
         $('#title').text('Kedua Mempelai');
         $('#image1').css('background-image', 'url(assets/img/profil.jpg)');
         $('#img1').attr('src', 'assets/img/bg2d.png');
         $('#name1').text('Dewi Nurhaliza Putri');
         $('#desc1').text('Putri dari Bapak Budi & Ibu Fitri Ayu');
   
         $('#name2').text('- & -');
   
         $('#image2').css('background-image', 'url(assets/img/profil.jpg)');
         $('#img2').attr('src', 'assets/img/bg2d.png');
         $('#name3').text('Dary Fajrin Maulana');
         $('#desc2').text('Putra dari Bapak Suryadi & Ibu Yuliana');

         //Kode
         $('#quote-data').html('"Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir."<br><br> - QS. Ar-Rum 21 -');

         //save date
         $('.std').text('Save The Date');

         $('.akad-title1').text('Akad Nikah');
         $('.akad-date').text('31');
         $('.akad-gambar').attr('src', ' assets/img/cover.jpg');
         $('.akad-time').html('Minggu<br>Desember 2023');
         $('.akad-time-n').text('08.00 WIB');
         $('.akad-title').text('LOKASI ACARA');
         $('.akad-address').text('Kediaman Mempelai Wanita');
         $('.akad-location').text('Jl Kaji 9 B, Dki Jakarta');
         $('#google-maps-link').attr('href', 'https://maps.google.com/');


         $('.save-date-vertical-text').addClass('aos-item').attr('data-aos', 'fade-up').attr('data-aos-duration', '16000');
         $('.save-date-resepsi').text('Resepsi');
         $('.save-date-couple-image').attr('src', 'assets/img/cover.jpg');
         $('.save-date-event-date').text('31');
         $('.save-date-event-time').html('Minggu<br>Desember 2023');
         $('.save-date-time').text('08.00 WIB');
         $('.save-date-location-title').text('LOKASI ACARA');
         $('.save-date-location-address').text('Kediaman Mempelai Wanita');
         $('.save-date-location-address2').text('Jl Kaji 9 B, Dki Jakarta');
         $('.save-date-map').attr('href', 'https://maps.google.com').addClass('aos-item').attr('data-aos', 'zoom-in').attr('data-aos-duration', '1000');


         //GALERY
    const images = [
      "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"
    ];

    const galleryContainer = $("#lightgallery");

    images.forEach(function (img) {
      const imagePath = `assets/gallery/${img}`;
      const html = `
        <a href="${imagePath}" class="col-md-4 col-sm-6 aos-item" 
           data-lg-size="1600-2400" data-sub-html="The Wedding Dewi & Dary" 
           data-aos="zoom-in" data-aos-duration="1000">
          <img loading="lazy"class="img-responsive" src="${imagePath}" width="100%">
        </a>
      `;
      galleryContainer.append(html);
    });

    lightGallery(document.getElementById('lightgallery'), {
      thumbnail: true,
      download: false
    });


    //STPRY

     const stories = [
      {
        title: "First Date",
        image: "assets/story/1.webp",
        description: "Pertama kali kami bertemu dan dikenalkan sebagai teman satu kampus dan kebetulan kami masih memiliki cerita masing-masing.",
        date: "01 Januari 2022"
      },
      {
        title: "Akad Nikah",
        image: "assets/story/2.webp",
        description: "Setelah beberapa tahun kami saling kenal, semakin membuat kami yakin satu sama lain untuk melangkah lebih jauh. Sehingga kami yakinkan diri sampai di tahap pelamaran.",
        date: "29 Juni 2022"
      },
      {
        title: "The Wedding",
        image: "assets/story/3.webp",
        description: "Akhir dari perjalanan pencarian kami masing-masing sampailah pada tahap kami untuk memulai awal cerita kami bersama sebagai keluarga yang In Syaa Allah kami yakin untuk membangunnya bersama. Semoga langkah kami selalu diberkahi dan diridhakan oleh Allah SWT.",
        date: "12 September 2022"
      }
    ];

    const timelineContainer = $('#storyTimeline');

    stories.forEach(function (story) {
      const html = `
        <div class="cd-timeline__block">
          <div class="cd-timeline__img cd-timeline__img--picture aos-item" data-aos="zoom-in" data-aos-duration="1000">
            <i class="fas fa-heart " style="color: white;"></i>
          </div>
          <div class="cd-timeline__content text-component aos-item" data-aos="zoom-in-right" data-aos-duration="1000">
            <h4 class="common-size-4x">${story.title}</h4>
            <div class="pic"><img loading="lazy"src="${story.image}" class="img-fluid" alt=""></div>
            <p class="color-contrast-medium m-t-10">${story.description}</p>
            <div class="flex justify-between items-center">
              <span class="cd-timeline__date">${story.date}</span>
            </div>
          </div>
        </div>
      `;
      timelineContainer.append(html);
    });





  // ========== [8] AMPLOP DIGITAL (REKENING) ==========
  const rekeningList = [
    {
      bankLogo: "assets/img/mandiri.png",
      chipLogo: "https://cdn.jsdelivr.net/gh/nikahdigital/cdn-undangan@main/tema-3/assets/img/chip.webp",
      noRekening: "4555343",
      atasNama: "Putri Cantika Sari",
    },
    // Tambah data rekening lainnya di sini kalo perlu
  ];

  const container = document.getElementById("rekening-container");

  rekeningList.forEach((data) => {
    const card = document.createElement("div");
    card.className =
      "atm-card d-flex justify-content-between align-items-center mb-5";
    card.setAttribute("data-rekening", data.noRekening);

    card.innerHTML = `
        <div class="text-left">
            <img loading="lazy" loading="lazy" src="${data.bankLogo}" alt="Bank Logo" class="bank-logo mb-3">
            <div class="label">No Rekening</div>
            <div class="value">${data.noRekening}</div>
            <div class="label mt-2">Atas Nama</div>
            <div class="name">${data.atasNama}</div>
        </div>
        <div class="text-right d-flex flex-column align-items-end">
            <img loading="lazy" loading="lazy" src="${data.chipLogo}" alt="Chip" class="chip mb-3">
            <button class="btn btn-outline-light btn-sm btn-copy" onclick="copyText(this)">
                <i class="fas fa-copy mr-1"></i> Salin
            </button>
        </div>`;

    container.appendChild(card);
  });

  // ========== [9] PENUTUP ==========


  function updateTimer() {
    const now = new Date().getTime();
    const diff = future - now;

    let d = 0,
      h = 0,
      m = 0,
      s = 0;

    if (diff > 0) {
      d = Math.floor(diff / (1000 * 60 * 60 * 24));
      h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      s = Math.floor((diff % (1000 * 60)) / 1000);
    }

    document.getElementById("timer").innerHTML =
      '<div class="fcommon"><span class="common-size-3x">' +
      d +
      '</span><span class="fmain">Hari</span></div>' +
      '<div class="fcommon"><span class="common-size-3x">' +
      h +
      '</span><span class="fmain">Jam</span></div>' +
      '<div class="fcommon"><span class="common-size-3x">' +
      m +
      '</span><span class="fmain">Menit</span></div>' +
      '<div class="fcommon"><span class="common-size-3x">' +
      s +
      '</span><span class="fmain">Detik</span></div>';
  }

  setInterval(updateTimer, 1000);
  updateTimer(); // tampilkan langsung saat halaman dimuat






         //tambahan
         var additionalInfo = 'Dresscode : Hitam Putih<br>Hiburan : Live Music<br>Perjamuan : Prasmanan';
         $('.additional-info').html(additionalInfo);

    });
     





function copyText(button) {
  const card = button.closest(".atm-card");
  const rekening = card.getAttribute("data-rekening");
  navigator.clipboard.writeText(rekening).then(
    function () {
      Swal.fire({
        icon: "success",
        title: "Disalin!",
        text: "Nomor rekening berhasil disalin: " + rekening,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Oke",
      });
    },
    function (err) {
      console.error("Gagal menyalin teks: ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal menyalin nomor rekening.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Coba Lagi",
      });
    }
  );
}

// ========== [9] DATA KADO ==========
const dataKado = {
  nama: "Rudi",
  noHp: "0812-3456-7890",
  alamat: "Jl. Bahagia No. 123, Jakarta Selatan, DKI Jakarta, 12345",
};
// ===================================

// Set ke HTML
document.getElementById("nama-penerima").textContent = dataKado.nama;
document.getElementById("no-hp").textContent = dataKado.noHp;
document.getElementById("alamat").textContent = dataKado.alamat;

function copyKadoInfo() {
  const textToCopy = `${dataKado.nama}\n${dataKado.noHp}\n${dataKado.alamat}`;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Disalin!",
        text: "Informasi berhasil disalin ke clipboard.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Oke",
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal menyalin informasi.",
        confirmButtonColor: "#d33",
        confirmButtonText: "Coba Lagi",
      });
    });
}








const scriptURL =
  "https://script.google.com/macros/s/AKfycbz9WNSDN8qsnyh-Du1In-2e_VjZImeK6TDxItZw61Tu_iSwhG-KqEYr7AKDYVxIWzcX/exec";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rsvpform");
  const submitButton = document.getElementById("btn-rsvp");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitButton.disabled = true;

    const formData = new FormData(form);

    // Ambil bagian terakhir dari URL path (contoh: 'simple-1')
    const pathParts = window.location.pathname.split("/");
    const kode = pathParts.filter((part) => part).pop();
    formData.append("kode", kode); // Masukkan ke dalam FormData

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        Swal.fire({
          title: "Terima kasih!",
          text: "Formulir Anda telah berhasil dikirim.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          form.reset();
          submitButton.disabled = false;
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Terjadi kesalahan: " + error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error("Error!", error.message);
        submitButton.disabled = false;
      });
  });
});

const scriptURLUcapan =
  "https://script.google.com/macros/s/AKfycbylzRrHneUlh1GfPNl0ZcgqjKh61LOS91WmsBw-r71ZqIWIg6OZzwzp9h8mWtIF_3L6/exec";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("ucapan");
  const submitButton = document.getElementById("btn-ucapan");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitButton.disabled = true;

    const formData = new FormData(form);

    // Ambil kode dari URL path (misalnya 'simple-1')
    const pathParts = window.location.pathname.split("/");
    const kode = pathParts.filter((part) => part).pop();
    formData.append("kode", kode); // Tambahkan ke FormData

    fetch(scriptURLUcapan, { method: "POST", body: formData })
      .then((response) => {
        Swal.fire({
          title: "Terima kasih!",
          text: "Formulir Anda telah berhasil dikirim.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          form.reset();
          submitButton.disabled = false;
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Terjadi kesalahan: " + error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error("Error!", error.message);
        submitButton.disabled = false;
      });
  });
});


