$(document).ready(function () {
  //DATA EDIT

  //DATA YANG HARUS DI EDIT
  //cara mematikan jika tidak pakai
  // $('#info').addClass('d-none');
  // $('#gallery').addClass('d-none');
  // $('#story').addClass('d-none');
  // $('#amplop').addClass('d-none');
  // $('#kado').addClass('d-none');

  //END

  // =======================
  // [1. DATA YANG HARUS DI EDIT - Umum]
  // =======================
  var eventTitle = "The Wedding";
  var coupleName = "Siti & Anton";
  var eventDate = "Minggu, 1 Januari 2024";
  var dateName = "- Minggu -";
  var dateNamHero = "1 Januari 2024";
  var profilePhotoUrl = "assets/img/profil.jpg";
  const future = new Date("2025-06-28T08:00:00").getTime();

  $("#loader-wrapper").css({
    background: 'url("assets/img/cover.jpg") center center no-repeat',
    "background-size": "cover",
  });

  // =======================
  // [2. Render Data Umum ke HTML]
  // =======================
  $("#dateName").text(dateName);
  $("#event-date-hero").text(dateNamHero);
  $("#weddingTitle").text(eventTitle);
  $("#coupleNames").text(coupleName);
  $("#eventDate").text(eventDate);
  $(".pntup-name").text(coupleName);
  $(".penutup-ps").attr("src", profilePhotoUrl);
  $("#profilePhoto").css("background-image", "url(" + profilePhotoUrl + ")");
  $("#eventTitle").text(eventTitle);
  $("#coupleName").text(coupleName);
  $("#eventDate").text(eventDate);

  // =======================
  // [3. DATA YANG HARUS DI EDIT - Mempelai]
  // =======================
  const bride = {
    name: "Siti Ani Kartini",
    info: "Putri dari Bapak Budi & Ibu Fitri Ayu",
    image: "assets/img/profil.jpg",
  };

  const groom = {
    name: "Anton Fajrin Maulana",
    info: "Putra dari Bapak Suryadi & Ibu Yuliana",
    image: "assets/img/profil.jpg",
  };

  // =======================
  // [4. Render Data Mempelai ke HTML]
  // =======================
  $("#brideName").text(bride.name);
  $("#brideInfo").text(bride.info);
  $("#brideImage").css("background-image", `url('${bride.image}')`);
  $("#groomImage").css("background-image", `url('${groom.image}')`);
  $("#groomName2").text(groom.name);
  $("#groomInfo2").text(groom.info);

  // =======================
  // [5. DATA YANG HARUS DI EDIT - Acara]
  // =======================
  const events = [
    {
      title: "Akad Nikah",
      day: "Minggu",
      date: "31 Desember 2023",
      time: "08:00 WIB",
      location: "Masjid Al-Aqsha Peraksangkal Jonggrangan Kabupaten Klaten",
      mapLink:
        "https://www.google.com/maps/dir/?api=1&destination=Masjid+Al-Aqsha&dir_action=navigate",
    },
    {
      title: "Resepsi",
      day: "Minggu",
      date: "31 Desember 2023",
      time: "08:00 WIB s/d Selesai",
      location: "Jln Tuanku Tambusai, Perumahan Permai Indah, Blok A Nomor 11.",
      mapLink:
        "https://www.google.com/maps/dir/?api=1&destination=-6.790267,106.722130&dir_action=navigate",
    },
  ];

  // =======================
  // [6. Render Acara ke HTML]
  // =======================
  for (let i = 0; i < events.length; i++) {
    $(`#eventTitle${i + 1}`).text(events[i].title);
    $(`#eventDay${i + 1}`).text(events[i].day);
    $(`#eventDate${i + 1}`).text(events[i].date);
    $(`#eventTime${i + 1}`).text(events[i].time);
    $(`#eventLocation${i + 1}`).text(events[i].location);
    $(`#eventMap${i + 1}`).attr("href", events[i].mapLink);
  }

  // =======================
  // [7. DATA YANG HARUS DI EDIT - Info Tambahan]
  // =======================
  var additionalInfo =
    "Dresscode : Hitam Putih<br>Hiburan : Live Music<br>Perjamuan : Prasmanan";
  $(".additional-info").html(additionalInfo);

  // =======================
  // [8. DATA YANG HARUS DI EDIT - Galeri]
  // =======================
  const galleryImages = [
    { src: "assets/gallery/1.webp", subtitle: `The Wedding ${coupleName}` },
    { src: "assets/gallery/2.webp", subtitle: `The Wedding ${coupleName}` },
    { src: "assets/gallery/3.webp", subtitle: `The Wedding ${coupleName}` },
    { src: "assets/gallery/4.webp", subtitle: `The Wedding ${coupleName}` },
    { src: "assets/gallery/5.webp", subtitle: `The Wedding ${coupleName}` },
    { src: "assets/gallery/6.webp", subtitle: `The Wedding ${coupleName}` },
  ];

  // =======================
  // [9. Render Galeri ke HTML]
  // =======================
  galleryImages.forEach((image) => {
    const galleryItem = `
    <a href="${image.src}" class="col-md-4 col-sm-6 aos-item" data-lg-size="1600-2400"
       data-sub-html="${image.subtitle}" data-aos="zoom-in" data-aos-duration="1000">
       <img class="img-responsive" src="${image.src}" width="100%">
    </a>`;
    $(".galery-fix").append(galleryItem);
  });

  // =======================
  // [10. Inisialisasi Plugin Galeri]
  // =======================
  lightGallery(document.getElementById("lightgallery"), {
    thumbnail: true,
    download: false,
  });

  // [11. Cerita Cinta]
  // DATA YANG HARUS DI EDIT
  const loveStory = [
    {
      title: "First Date",
      date: "01 Januari 2022",
      description:
        "Pertama kali kami bertemu dan dikenalkan sebagai teman satu kampus dan kebetulan kami masih memiliki cerita masing-masing.",
      img: "assets/story/1.webp",
    },
    {
      title: "Akad Nikah",
      date: "29 Juni 2022",
      description:
        "Setelah beberapa tahun kami saling kenal, semakin membuat kami yakin satu sama lain untuk melangkah lebih jauh.Sehingga kami yakinkan diri sampai di tahap pelamaran. ",
      img: "assets/story/2.webp",
    },
    {
      title: "The Wedding",
      date: "12 September 2022",
      description:
        "Akhir dari perjalanan pencarian kami masing-masing sampailah pada tahap kami untuk memulai awal cerita kami bersama sebagai keluarga yang In Syaa Allah kami yakin untuk membangunnya bersama  .Semoga langkah kami selalu diberkahi dan diridhakan oleh Allah SWT. ",
      img: "assets/story/3.webp",
    },
  ];
  // END

  $(document).ready(function () {
    loveStory.forEach((story) => {
      const storyItem = `
        <div class="cd-timeline__block">
          <div class="cd-timeline__img cd-timeline__img--picture aos-item" data-aos="zoom-in" data-aos-duration="1000">
            <i class="fas fa-heart c-white"></i>
          </div>
          <div class="cd-timeline__content text-component aos-item" data-aos="zoom-in-right" data-aos-duration="1000">
            <h4 class="common-size-4x">${story.title}</h4>
            <div class="pic"><img src="${story.img}" class="img-fluid" alt=""></div>
            <p class="color-contrast-medium m-t-10">${story.description}</p>
            <div class="flex justify-between items-center">
              <span class="cd-timeline__date">${story.date}</span>
            </div>
          </div>
        </div>
      `;
      $("#storyContainer").append(storyItem);
    });
  });

  // [12. Amplop Digital - Rekening]
  // DATA YANG HARUS DI EDIT
  const rekeningList = [
    {
      bankLogo: "assets/img/mandiri.png",
      chipLogo: "assets/img/chip.webp",
      noRekening: "4555343",
      atasNama: "Putri Cantika Sari",
    },
    // Tambah data rekening lainnya di sini kalo perlu
  ];
  // END

  const container = document.getElementById("rekening-container");

  rekeningList.forEach((data) => {
    const card = document.createElement("div");
    card.className =
      "atm-card d-flex justify-content-between align-items-center mb-5";
    card.setAttribute("data-rekening", data.noRekening);

    card.innerHTML = `
      <div class="text-left">
        <img src="${data.bankLogo}" alt="Bank Logo" class="bank-logo mb-3">
        <div class="label">No Rekening</div>
        <div class="value">${data.noRekening}</div>
        <div class="label mt-2">Atas Nama</div>
        <div class="name">${data.atasNama}</div>
      </div>
      <div class="text-right d-flex flex-column align-items-end">
        <img src="${data.chipLogo}" alt="Chip" class="chip mb-3">
        <button class="btn btn-outline-light btn-sm btn-copy" onclick="copyText(this)">
          <i class="fas fa-copy mr-1"></i> Salin
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // [13. Countdown Timer]
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
  updateTimer();

  // [14. Ambil Nama dari URL Parameter]
  var urlParams = new URLSearchParams(window.location.search);
  var toParam = urlParams.get("to");
  if (toParam) {
    $("#nama").text(decodeURIComponent(toParam.replace(/\+/g, " ")));
  }
});

function copyText(button) {
  const card = button.closest(".atm-card");
  const rekening = card.getAttribute("data-rekening");
  navigator.clipboard.writeText(rekening).then(
    function () {
      alert("Nomor rekening berhasil disalin: " + rekening);
    },
    function (err) {
      console.error("Gagal menyalin teks: ", err);
    }
  );
}

// [15. Kado - Data Kontak Penerima]
// DATA YANG HARUS DI EDIT
const dataKado = {
  nama: "Rudi",
  noHp: "0812-3456-7890",
  alamat: "Jl. Bahagia No. 123, Jakarta Selatan, DKI Jakarta, 12345",
};
// END

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
