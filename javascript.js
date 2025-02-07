document.addEventListener("DOMContentLoaded", function () {
    // Dynamically load food resources
    const foodList = document.querySelector(".food-list");
    if (foodList) {
        const foodResources = [
            "🌟 Georgian Food Bank - Free meals every Monday & Thursday",
            "🥪 Student Meal Support Program - Discounted meals on campus",
            "🍎 Community Pantry - Fresh fruits and groceries available",
            "🥗 Soup Kitchen - Free healthy meals on weekends",
            "🍞 Breakfast Club - Free breakfast every morning in the cafeteria"
        ];
        foodResources.forEach(resource => {
            let li = document.createElement("li");
            li.textContent = resource;
            li.style.background = "#fff";
            li.style.padding = "15px";
            li.style.margin = "10px 0";
            li.style.borderRadius = "5px";
            foodList.appendChild(li);
        });
    }

    // Dynamically load community programs
    const communityList = document.querySelector(".community-list");
    if (communityList) {
        const communityPrograms = [
            "📢 Georgian Volunteers - Help organize food drives & awareness campaigns",
            "💡 Student Nutrition Club - Learn about healthy eating and nutrition support",
            "🤝 Community Outreach - Assist local food banks and shelters",
            "🌍 International Student Support - Connect with other international students",
            "🏫 Campus Mentorship Program - Provide peer guidance to new students"
        ];
        communityPrograms.forEach(program => {
            let li = document.createElement("li");
            li.textContent = program;
            li.style.background = "#fff";
            li.style.padding = "15px";
            li.style.margin = "10px 0";
            li.style.borderRadius = "5px";
            communityList.appendChild(li);
        });
    }

    // Form validation for contact page
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from actually submitting

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields!");
            } else {
                alert(`Thank you, ${name}! We will get back to you soon.`);
                form.reset();
            }
        });
    }
});
