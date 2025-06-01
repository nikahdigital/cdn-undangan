

$(document).ready(function() {

     
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
  

  const future = new Date("2026-06-28T08:00:00").getTime();


   
      
   $('.couple-name').text('Dary & Dewi');
    $('.tanggal').text('31 Desember 2023');
    $('.hari').text('- Minggu -');

    //wanita
    $('.nama-wanita').text('Dewi Nurhaliza Putri');
    $('.ortu-wanita').text('Putri dari Bapak Budi & Ibu Fitri Ayu');
    $('.foto-wanita').attr('src', 'assets/img/profil.jpg');


    //pria
    $('.nama-pria').text('Dary Fajrin Maulana');
    $('.ortu-pria').text('Putra dari Bapak Suryadi & Ibu Yuliana');
    $('.foto-pria').attr('src', 'assets/img/profil.jpg');
    

       const akadData = {
      image: "assets/img/cover.jpg",
      date: "30",
      time: "Sabtu<br>Desember 2023",
      jam: "08.00 WIB",
      jalan: "Jl Kaji 9 A, Dki Jakarta",
      lokasiTitle: "LOKASI ACARA",
      lokasiDesc: "Kediaman Mempelai Wanita",
      mapUrl: "https://maps.google.com/akad",
      mapText: "Google Maps"
    };

    const resepsiData = {
      image: "assets/img/cover.jpg",
      date: "31",
      time: "Minggu<br>Desember 2023",
      jam: "08.00 WIB",
      jalan: "Jl Kaji 9 B, Dki Jakarta",
      lokasiTitle: "LOKASI ACARA",
      lokasiDesc: "Kediaman Mempelai Wanita",
      mapUrl: "https://erinovita.my.id",
      mapText: "Google Maps"
    };

    $("#img-header").attr("src", "assets/img/bg1.png");

    // Akad
    $("#img-akad").attr("src", akadData.image);
    $("#akad-date").html(akadData.date);
    $("#akad-time").html(akadData.time);
    $("#akad-jam").html(akadData.jam);
    $("#akad-jalan").html(akadData.jalan);
    $("#akad-lokasi-title").html(akadData.lokasiTitle);
    $("#akad-lokasi-desc").html(akadData.lokasiDesc);
    $("#akad-map").attr("href", akadData.mapUrl).html(akadData.mapText);

    // Resepsi
    $("#img-resepsi").attr("src", resepsiData.image);
    $("#resepsi-date").html(resepsiData.date);
    $("#resepsi-time").html(resepsiData.time);
    $("#resepsi-jam").html(resepsiData.jam);
    $("#resepsi-jalan").html(resepsiData.jalan);
    $("#resepsi-lokasi-title").html(resepsiData.lokasiTitle);
    $("#resepsi-lokasi-desc").html(resepsiData.lokasiDesc);
    $("#resepsi-map").attr("href", resepsiData.mapUrl).html(resepsiData.mapText);



        //informasi tambahan
        var additionalInfo = 'Dresscode : Hitam Putih<br>Hiburan : Live Music<br>Perjamuan : Prasmanan';
        $('.additional-info').html(additionalInfo);
    



         //GALERY
    const images = [
      "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"
    ];

    const galleryContainer = $("#lightgallery");

    images.forEach(function (img) {
      const imagePath = `assets/gallery/${img}`;
     const html = `
  <a href="${imagePath}" class="gallery-item" data-lg-size="1600-2400" data-sub-html="The Wedding Dewi & Dary">
    <img loading="lazy" loading="lazy" loading="lazy"  src="${imagePath}" alt="The Wedding Dewi & Dary">
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
            <div class="pic"><img loading="lazy" loading="lazy" loading="lazy"  loading="lazy"src="${story.image}" class="img-fluid" alt=""></div>
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
            <img loading="lazy" loading="lazy" loading="lazy" loading="lazy" src="${data.bankLogo}" alt="Bank Logo" class="bank-logo mb-3">
            <div class="label">No Rekening</div>
            <div class="value">${data.noRekening}</div>
            <div class="label mt-2">Atas Nama</div>
            <div class="name">${data.atasNama}</div>
        </div>
        <div class="text-right d-flex flex-column align-items-end">
            <img loading="lazy" loading="lazy" loading="lazy" loading="lazy" src="${data.chipLogo}" alt="Chip" class="chip mb-3">
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
