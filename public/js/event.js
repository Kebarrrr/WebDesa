const events = [
  {
    month: "April",
    details: [
      "03 April - Event ??",
      "20 April - Event ??",
      "25 April - Event ??",
      "27 April - Event ??"
    ]
  },
  {
    month: "May",
    details: [
      "05 May - Event A",
      "12 May - Event B",
      "19 May - Event C",
      "26 May - Event D"
    ]
  },
  {
    month: "June",
    details: [
      "05 June - Event A",
      "12 June - Event B",
      "19 June - Event C",
      "26 June - Event D"
    ]
  }
];

let currentIndex = 0;

function loadEvent(index) {
  const event = events[index];
  const eventDetails = event.details.map(detail => `<p>${detail}</p>`).join('');
  const eventContent = `
    <div class="event-card">
      <div class="event-month text-align-center ">${event.month}</div>
      <div class="event-details">
        ${eventDetails}
      </div>
    </div>
  `;
  document.getElementById('card-body').innerHTML = eventContent;
}

function showNextEvent() {
  currentIndex = (currentIndex + 1) % events.length;
  loadEvent(currentIndex);
}

function showPrevEvent() {
  currentIndex = (currentIndex - 1 + events.length) % events.length;
  loadEvent(currentIndex);
}

document.getElementById('nextButton').addEventListener('click', showNextEvent);
document.getElementById('prevButton').addEventListener('click', showPrevEvent);

document.addEventListener('DOMContentLoaded', () => {
  loadEvent(currentIndex);
});