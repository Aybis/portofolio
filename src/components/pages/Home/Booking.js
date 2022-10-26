import {
  DocumentIcon,
  ListBulletIcon,
  LockClosedIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  XMarkIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { convertDate } from '../../../utils/helpers/convertDate';

export default function Booking() {
  // Constanta
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const nameOfMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Hook
  const [showModalForm, setshowModalForm] = useState(false);
  const [showDetail, setshowDetail] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [listDay, setlistDay] = useState([]);
  const [dateSelected, setdateSelected] = useState({
    date: {},
    event: [],
  });
  const [date, setdate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const [dataEventFromLocalStorage, setdataEventFromLocalStorage] = useState(
    localStorage.getItem('dataEvent')
      ? JSON.parse(localStorage.getItem('dataEvent'))
      : [],
  );

  const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
    );
  };

  const [formBooking, setformBooking] = useState({
    id: '',
    nik: '',
    title: '',
    date: '',
    start_time: '',
    end_time: '',
    description: '',
  });

  // get date of first month
  const firstDay = new Date(date.year, date.month, 1).getDay();

  // push length of firstDay to array
  const pushArrayEmpty = () => {
    for (let i = 0; i < firstDay; i++) {
      setlistDay((prev) => [...prev, '']);
    }
  };

  const changeNextMonth = () => {
    if (date.month === 11) {
      setdate({ month: 0, year: date.year + 1 });
    } else {
      setdate({ month: date.month + 1, year: date.year });
    }
  };

  const changePrevMonth = () => {
    if (date.month === 0) {
      setdate({ month: 11, year: date.year - 1 });
    } else {
      setdate({ month: date.month - 1, year: date.year });
    }
  };

  const getAllDaysInMonth = (month, year) =>
    Array.from(
      { length: new Date(year, month, 0).getDate() }, // get next month, zeroth's (previous) day
      (_, i) => new Date(year, month - 1, i + 1), // get current month (0 based index)
    );

  // Handler click detail calendar date
  const handlerClickDate = (date, event) => {
    setshowDetail(true);
    setdateSelected({ date, event });
  };

  // Function Insert Data
  const insertDataEventToLocalStorage = (data) => {
    const dataEvent = localStorage.getItem('dataEvent')
      ? JSON.parse(localStorage.getItem('dataEvent'))
      : [];
    dataEvent.push(data);
    localStorage.setItem('dataEvent', JSON.stringify(dataEvent));
    setdataEventFromLocalStorage(dataEvent);
  };

  // Function Delete Data
  const deleteDataFromLocalStorage = (id, data) => {
    console.log(id, data);
    setisLoading(true);
    const newData = data?.event?.filter((item) => item.id !== id);
    localStorage.setItem('dataEvent', JSON.stringify(newData));
    setdataEventFromLocalStorage(newData);
    setdateSelected({
      date: data.date,
      event: newData,
    });
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  };

  // handler submit form
  const handlerSubmit = (event) => {
    event.preventDefault();
    setisLoading(true);
    formBooking.id = uuidv4();
    insertDataEventToLocalStorage(formBooking);

    setTimeout(() => {
      setisLoading(false);
      setshowModalForm(false);

      // reset all form
      setformBooking({
        id: '',
        nik: '',
        title: '',
        date: '',
        start_time: '',
        end_time: '',
        description: '',
      });
    }, 300);
  };

  // handler onchange input form
  const handlerChangeForm = (e) => {
    setformBooking({ ...formBooking, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setlistDay([]);
    pushArrayEmpty();

    //   set date of month to list data
    const result = getAllDaysInMonth(date.month + 1, date.year).map((x) => {
      return {
        day: x.toLocaleString('en-EN', {
          weekday: 'short',
        }),
        date: x.toLocaleString('en-EN', {
          day: 'numeric',
        }),
        uniq: x.toLocaleString('en-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
        timestamp: x.toLocaleString('en-EN', {
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          year: 'numeric',
        }),
      };
    });

    setlistDay((prev) => [...prev, ...result]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, firstDay, dataEventFromLocalStorage]);

  return (
    <div className="relative max-h-full max-w-full inset-0 flex bg-zinc-50">
      {/* Sidebar */}
      <nav className="hidden md:block relative inset-0 w-36 box-border border-r border-gray-200">
        <div className="relative flex flex-col justify-between h-full items-center px-4 py-12">
          {/* Logo App */}
          <div className="relative text-lg font-semibold leading-relaxed">
            BOOKING
          </div>
          {/* Content */}
          <div className="relative grid gap-8 ">
            <CalendarIcon className="h-8 text-orange-500" />
            <ListBulletIcon className="h-8 text-zinc-500" />
            <DocumentIcon className="h-8 text-zinc-500" />
          </div>
          {/* Logout */}
          <div>
            <LockClosedIcon className="h-8 text-gray-800" />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative p-4 md:py-6 inset-0 w-full h-full box-border md:px-8">
        {/* Header Content */}
        <div className="relative flex flex-col md:flex-row justify-between items-start">
          {/* Heading  */}
          <div className="relative flex flex-col md:flex-row lg:w-1/2">
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 leading-relaxed">
                {nameOfMonth[date.month]}
              </h1>
              <div className="relative flex gap-6 items-end">
                <h1 className="text-4xl font-bold text-zinc-900 leading-relaxed">
                  {date.year}
                </h1>
                <div className="relative border-b flex items-center pb-2 w-fit h-fit gap-2">
                  <div
                    onClick={() => changePrevMonth()}
                    className="cursor-pointer">
                    <ChevronLeftIcon className="h-6 text-zinc-800" />
                  </div>
                  <div className="relative flex justify-center items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-500"></div>
                  </div>
                  <div
                    onClick={() => changeNextMonth()}
                    className="cursor-pointer">
                    <ChevronRightIcon className="h-6 text-zinc-800" />
                  </div>
                </div>
              </div>
              <p className="font-normal text-base mt-3 leading-relaxed tracking-wide text-zinc-900">
                Here all your planned events. You will find information for each
                event as well you can planned new one.
              </p>
            </div>
          </div>

          {/* Button Add Event */}
          <div className="relative flex w-full justify-end mt-6">
            <button
              onClick={() => setshowModalForm(true)}
              className="relative flex px-4 py-2 bg-zinc-800 text-white font-medium leading-relaxed tracking-wide shadow-lg shadow-gray-800/20">
              <PlusIcon className="h-6 mr-2" />
              Booking room
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="relative mt-12 grid grid-cols-7 gap-1 md:gap-4 md:px-8">
          {/* Card Name of Day */}
          {days.map((day, index) => {
            return (
              <div key={index} className="relative p-1">
                <h1
                  className={`text-sm md:text-xl text-center ${
                    convertDate('namaHari') === day &&
                    date.month === new Date().getMonth() &&
                    date.year === new Date().getFullYear()
                      ? 'text-orange-500 font-semibold'
                      : 'text-zinc-500  font-medium'
                  } uppercase`}>
                  {day.substring(0, 3)}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="relative mt-8 grid grid-cols-7 gap-1 md:gap-4 md:px-8">
          {/* Card Date */}
          {listDay.map((day, index) => {
            return day === '' ? (
              <div key={index} className="relative"></div>
            ) : (
              <div
                key={index}
                onClick={(e) =>
                  handlerClickDate(
                    day,
                    dataEventFromLocalStorage.filter(
                      (data) =>
                        convertDate('tanggal', data.date) === +day.date &&
                        convertDate('bulan') === +date.month + 1 &&
                        convertDate('tahun') === +date.year,
                    ),
                  )
                }
                className={[
                  'relative border-t md:border-t-2 h-24 max-h-full md:py-4 cursor-pointer hover:scale-105 transition-all duration-300',
                  day.timestamp === convertDate('timestampEN')
                    ? 'border-orange-500 text-orange-600 bg-zinc-100 md:px-4'
                    : 'border-zinc-500 md:border-zinc-800 text-zinc-900',
                ].join(' ')}>
                <h1 className="text-lg md:text-3xl font-semibold ">
                  {day.date}
                </h1>

                {/* check event date with day.date */}
                <div key={index} className="relative flex gap-2 mt-6">
                  {dataEventFromLocalStorage
                    .filter(
                      (data) =>
                        convertDate('tanggal', data.date) === +day.date &&
                        convertDate('bulan') === +date.month + 1 &&
                        convertDate('tahun') === +date.year,
                    )
                    ?.map((x, index) => {
                      return (
                        <div
                          key={index}
                          className="relative flex flex-wrap gap-1">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Detail Event */}
      <div
        className={[
          'absolute top-0 bg-zinc-50/90  lg:bg-white/40 border-2 backdrop-blur-sm transition-all duration-300',
          showDetail
            ? 'opacity-100 z-40 w-full  md:w-1/3 xl:w-1/4 h-full right-0'
            : 'opacity-0 w-0 h-0 -z-30 right-full md:right-1/4',
        ].join(' ')}>
        <div className="relative p-6 w-full h-full">
          <button
            className={[
              'relative h-8 w-8 cursor-pointer transition-all duration-500 ease-in-out',
              showDetail ? 'animate-none' : 'animate-spin',
            ].join(' ')}
            onClick={() => setshowDetail(false)}>
            <XMarkIcon className="h-full" />
          </button>
          {/* Header Sidebar */}
          <div className="relative grid max-h-full mt-2">
            <h1 className="text-zinc-800 text-2xl font-bold leading-relaxed">
              Detail of Day
            </h1>

            <h2 className="text-xl mt-4 text-zinc-700">
              {dateSelected?.date?.timestamp?.replace(',', ' ')}
            </h2>
          </div>
          <hr className="w-full h-1 mt-2 border-t bg-zinc-400 relative" />
          <div className="relative flex justify-end">
            <button
              onClick={() => setshowModalForm(true)}
              className="relative mt-4 bg-zinc-800 text-white px-4 py-2 text-sm font-medium leading-relaxed tracking-wide">
              + Booking
            </button>
          </div>
          {/* Content Event */}
          {!isLoading && (
            <div className="relative grid gap-4 mt-8">
              {dateSelected?.event?.length === 0 ? (
                <div className="relative p-4 flex justify-center items-center text-gray-600 font-light leading-relaxed tracking-wide">
                  <p>Belum ada Booking Ruang Meeting</p>
                </div>
              ) : (
                dateSelected?.event?.map((x, index) => {
                  console.log(x);
                  return (
                    <div
                      key={index}
                      className="relative p-4 bg-white shadow-lg shadow-gray-200/40 rounded-lg">
                      <h1 className="text-3xl font-semibold text-zinc-800">
                        {x.start_time} - {x.end_time} WIB
                      </h1>
                      <h1 className="text-xl font-semibold text-zinc-800 capitalize mt-2">
                        {x.title.toLowerCase()}
                      </h1>
                      <p className="text-sm font-light text-zinc-800 mt-1">
                        {x.description}
                      </p>

                      <button
                        className="mt-4"
                        onClick={() =>
                          deleteDataFromLocalStorage(x.id, dateSelected)
                        }>
                        <TrashIcon className="h-5 text-gray-500" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal Form */}
      <div
        className={[
          'absolute bg-white/40 backdrop-blur-sm transition-all duration-300 ease-in-out',
          showModalForm
            ? 'opacity-100 z-50 top-0 inset-0 h-screen max-h-full w-full'
            : 'opacity-0 w-full h-screen -z-30',
        ].join(' ')}>
        <div className="relative mx-auto container max-w-7xl min-h-screen flex justify-center items-center">
          <form
            onSubmit={handlerSubmit}
            className="relative bg-white shadow-lg p-6 rounded-lg w-full md:w-1/2 border-2 border-gray-200">
            {/* Header Modal */}
            <div className="relative">
              <h1 className="font-medium leading-relaxed text-zinc-800 text-xl">
                Form Booking Meeting Room
              </h1>

              <div
                className="h-8 w-8 absolute top-0 right-4 cursor-pointer"
                onClick={() => setshowModalForm(false)}>
                <XMarkIcon className="h-full w-full" />
              </div>
            </div>

            {/* Content Modal */}

            <div className="relative mt-4">
              <div className="relative grid gap-4">
                {Object.keys(formBooking)
                  .filter((form) => form !== 'id')
                  .map((x, index) => {
                    return (
                      <div key={index} className="relative">
                        <label className="text-zinc-800 font-medium text-sm uppercase">
                          {x.replace('_', ' ')}
                        </label>
                        <input
                          type={
                            x === 'date'
                              ? 'date'
                              : x.includes('time')
                              ? 'time'
                              : 'text'
                          }
                          name={x}
                          required={x === 'description' ? false : true}
                          className="w-full py-3 px-4 border-2 border-gray-300 rounded-md mt-2 font-medium text-zinc-800 text-sm"
                          placeholder={`Masukan ${x}`}
                          value={formBooking[x]}
                          onChange={(e) => handlerChangeForm(e)}
                        />
                      </div>
                    );
                  })}

                <button
                  disabled={isLoading}
                  className="disabled:cursor-not-allowed disabled:bg-zinc-400 relative bg-zinc-900 text-white rounded-md font-medium py-3 mt-6 hover:bg-zinc-700 transition-all duration-300">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
