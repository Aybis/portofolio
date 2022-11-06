export const convertDate = (type, time) => {
  let date = time
    ? new Date(time === undefined ? time.toString() : time.replace(/\s/, 'T'))
    : new Date();
  let options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
  };

  let optionsBulanTahun = {
    month: 'long',
    year: 'numeric',
  };

  let optionsShort = {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  };

  let day = {
    weekday: 'long',
  };

  let month = {
    month: 'long',
  };

  let dateDay = {
    weekday: 'short',
  };

  switch (type) {
    case 'tanggalBulanTahun':
      return date.toLocaleDateString('en-EN', options);

    case 'bulanTahun':
      return date.toLocaleDateString('en-EN', optionsBulanTahun);

    case 'tanggalShort':
      return date.toLocaleDateString('en-EN', optionsShort);

    case 'tanggalWaktuLengkap':
      return (
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes() +
        ':' +
        date.getSeconds()
      );
    case 'parseTime':
      return Date.parse(date);

    case 'tanggalFormat':
      return `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;

    case 'tanggalHari':
      // Senin, 15 November 2021
      return date.toLocaleString('en-EN', options);

    case 'tanggalKemarin':
      // Senin, 15 November 2021
      date.setDate(date.getDate() - 1);

      return date.toLocaleString('en-EN', options);

    case 'tanggal':
      return date.getDate();

    case 'namaHari':
      //   Rabu
      return date.toLocaleString('en-EN', day);

    case 'bulan':
      return date.getMonth() + 1;

    case 'namaBulan':
      return date.toLocaleString('en-EN', month);

    case 'tahun':
      return date.getFullYear();

    case 'jamMenitDetik':
      return (
        date.getHours() +
        ' : ' +
        (date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`) +
        ' : ' +
        (date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`)
      );

    case 'jamMenit':
      return (
        date.getHours() +
        ':' +
        (date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`)
      );

    case 'convertTime':
      return date.getHours() + date.getMinutes() / 100;

    case 'jamAM':
      return (
        date.getHours() +
        ':' +
        (date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`) +
        (date.getHours() > 12 ? ' PM' : ' AM')
      );

    case 'dateDay':
      return (
        date.getDate() +
        '.' +
        (date.getMonth() + 1) +
        '.' +
        date.getFullYear() +
        ', ' +
        date.toLocaleString('en-EN', dateDay)
      );

    case 'jam':
      return date.getHours();

    case 'menit':
      return date.getMinutes() > 9
        ? date.getMinutes()
        : `0${date.getMinutes()}`;

    case 'detik':
      return date.getSeconds() > 9
        ? date.getSeconds()
        : `0${date.getSeconds()}`;

    case 'timestampEN':
      return date.toLocaleString('en-EN', {
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        year: 'numeric',
      });

    default:
      break;
  }
};
