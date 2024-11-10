// import { table, adminTable } from "./table.js";
// console.log(table);

// import { table as newTable } from "./server.js"; 
// console.log(newTable)

const table = require('./server.js');
console.log(table)

function updateClock() {
  let now = new Date();
  let dname = now.getDay();
  let mo = now.getMonth();
  let dnum = now.getDate();
  let yr = now.getFullYear();
  let hou = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let pe = "AM";

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
    pe = "PM";
  }

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  let values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

window.onload = function () {
  // initClock();
};

let tableContentHTML = `
  <tbody class="text-center font-semibold">
    <!-- Row 1 - First Class -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-neutral-950 p-2 text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        First Class
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        July 8<sup>th</sup>
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        July 0<sup>th</sup>
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        July 10<sup>th</sup>
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        July 11<sup>th</sup>
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
    </tr>

    <!-- Row 2 - Last Class -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-neutral-950 p-2 text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        Last Class
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        August 26<sup>th</sup>
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        August 27<sup>th</sup>
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        August 28<sup>th</sup>
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        August 29<sup>th</sup>
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
    </tr>

    <!-- Row 3 - # Classes -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-neutral-950 p-2 text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        # Classes
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        7
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        8
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        8
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        8
      </td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
      <td
        contenteditable="true"
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-2 transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      ></td>
    </tr>

    <!-- Row 4 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Trampoline and Tumbling</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 5-7
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          60 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">04:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $147
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">04:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $168
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">04:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $168
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 5 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Trampoline and Tumbling</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 8-9
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          90 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">05:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">04:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">05:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 6 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Trampoline and Tumbling</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 10-12
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          90 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">05:30 pm and 06:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $221
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">05:30 pm and 06:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">05:30 pm and 06:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">05:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 7 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Trampoline and Tumbling</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 13-17
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          90 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">07:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $221
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">07:00 pm and 07:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">06:30 pm and 07:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 8 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Trampoline and Tumbling</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 18+
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          90 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">08:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">08:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 9 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Urban Gymnastics</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 8-9
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          90 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">05:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $221
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">06:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">05:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 10 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Urban Gymnastics</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 10-12
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          90 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">06:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $221
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">07:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">06:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 11 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Urban Gymnastics</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 13-17
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          90 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">07:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $221
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">07:30 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">07:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $252
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 12 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Cheer Focused Tumbling</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 10-15
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">8:1 Ratio</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          60 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">08:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $168
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">06:00 pm and 08:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $168
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>

    <!-- Row 13 -->
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">Open Gym</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          Ages 10+
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          120 min
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">09:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $15
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2">09:00 pm</div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          $15
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          &#8205;
        </div>
      </td>
    </tr>
  </tbody>
`;

const tableEdit = document.querySelector(".table--edit");
tableEdit.innerHTML = tableContentHTML;
const tableCells = tableEdit.getElementsByTagName("td");
const tableRows = tableEdit.getElementsByTagName("tr");
const buttonsTd = `
  <td class="add-row-btn group rounded-lg bg-emerald-400 p-2 transition-colors hover:bg-emerald-500 text-neutral-900 dark:hover:bg-emerald-500 cursor-pointer select-none" onclick="addRowBtn(event);"><button >+</button></td>
  <td class="remove-row-btn group rounded-lg bg-red-400 p-2 transition-colors hover:bg-red-500 text-neutral-900 dark:hover:bg-red-500 cursor-pointer select-none" onclick="removeRowBtn(event);" ><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg></button></td>
`;

for (let i = 0; i < tableRows.length; i++) {
  if (i > 2) {
    tableRows[i].innerHTML += buttonsTd;
  }
}

// Add Row Button
function addRowBtn(event) {
  const addBtn = event.target;
  const currentRow = addBtn.closest("tr");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <tr
      class="group/{row} rounded-lg ring-purple-500 hover:ring-4"
    >
      <td
        class="rounded-lg bg-red-500 p-0 align-bottom text-neutral-100 group-hover/{row}:rounded-none group-hover/{row}:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-950 p-2 group-hover/{row}:rounded-r-none group-hover/{row}:bg-purple-400"
        >
          
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          
        </div>
      </td>
      <td
        class="dark:bdg-neutral-800 group rounded-lg bg-white p-0 align-bottom transition-colors hover:rounded-none hover:bg-purple-500 hover:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-purple-500"
      >
        <div contenteditable="true" class="m-2"></div>
        <div
          contenteditable="true"
          class="w-full rounded-b-lg bg-neutral-200 p-2 group-hover:rounded-bl-none group-hover:bg-purple-400 dark:bg-neutral-950"
        >
          
        </div>
      </td>
      <td class="add-row-btn group rounded-lg bg-emerald-400 p-2 transition-colors hover:bg-emerald-500 text-neutral-900 dark:hover:bg-emerald-500 cursor-pointer select-none" onclick="addRowBtn(event);"><button >+</button></td>
      <td class="remove-row-btn group rounded-lg bg-red-400 p-2 transition-colors hover:bg-red-500 text-neutral-900 dark:hover:bg-red-500 cursor-pointer select-none" onclick="removeRowBtn(event);" ><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg></button></td>
    </tr>
  `;
  currentRow.parentNode.insertBefore(newRow, currentRow.nextSibling);
}

// Remove Row Button
function removeRowBtn(event) {
  event.target.closest("tr").remove();
}

// Save Content
function saveTableContent() {
  tableContentHTML = tableEdit.innerHTML;
  console.log(tableContentHTML);
  table = "<h1> New Table </h1>";
}

const saveBtn = document.querySelector(".save-table-btn");
saveBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to save the changes?") == true) {
    saveTableContent();
  } else {
    return;
  }
});

// Reset table
const resstBtn = document.querySelector(".reset-table-btn");
resstBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to reset the changes?") == true) {
    location.reload();
  } else {
    return;
  }
});
