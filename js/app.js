/**
 * creating sections dynamically
 * by using buildSection function and add them to the main tag
 * ES6
 */
// counter to specify attributes and number of section
let counter = 0;
const buildSection = () => {
    counter++;
    const sectionContent = `<section id="section${counter}" data-section="Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    document.querySelector("main").insertAdjacentHTML("beforeend", sectionContent);
};
/**
 * i made a list for li's equal to the number of sections by iterating on them
 * and i'll use .innerHTML="" to avoid sections duplication
 */

// build the nav

const navList = document.getElementById("navbar__list");
const createNavList = () => {
    navList.innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
        const listSection = `<li><a href="#${section.id}" data-section="${section.id}" class="menu__link">${section.dataset.section}</a></li>`;
        navList.insertAdjacentHTML("beforeend", listSection);
    });
};
// Add class 'active' to section when near top of viewport

window.onscroll = function() {
        document.querySelectorAll("section").forEach(function(active) {
            let activeId = navList.querySelector(`[data-section=${active.id}]`);
            if (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) {

                active.classList.add("your-active-class");
                activeId.classList.add("active-link");

            } else {
                active.classList.remove("your-active-class");
                activeId.classList.remove("active-link");
            }
        });
    }
    /**
     * create three-section dynamically by javascript instead of HTML
     * create them links
     * ability to observe sections
     */
for (let i = 1; i < 5; i++) buildSection();
createNavList();

// creating more sections by click on the button
document.getElementById("AddSectionBtn").addEventListener("click", () => {
    buildSection();
    createNavList();

});
// To Top Button variable
const topBtn = document.getElementById("topBtn");

// to top button event listener smoothly.
topBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});