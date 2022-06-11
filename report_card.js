data = [
    {
        "name": "Mani",
        "course": "Computer Science",
        "scores": {
            "Algorithm": 8.3,
            "Machine Learning": 7.1,
            "Data Structures": 7.0,
            "Maths": 7.5,
            "Databases": 9.2
        }
    },
    {
        "name": "Gowsalya",
        "course": "Artificial Inteligence",
        "scores": {
            "Algorithm": 6.3,
            "Machine Learning": 6.1,
            "Data Structures": 8.0,
            "Web 3": 7.5,
            "Databases": 5.2
        }
    },
    {
        "name": "Karthik",
        "course": "Crypto",
        "scores": {
            "Block Chain": 8.3,
            "Web 3": 7.1,
            "Data Structures": 7.8,
            "Maths": 7.2,
            "Databases": 8.2
        }
    }
    ]

function reportcard_valid(){


    const valid_name = document.querySelector("#name");
    for(i=0; i<data.length; i++){
        if(data[i].name == valid_name.value){
            document.getElementById("course").innerHTML = data[i].course;
            var course_scores = "";
            for(const key in data[i].scores) {

                console.log(key, data[i].scores[key]);
                course_scores += "<tr> <td>" + key + "</td> <td>" 
                                    + data[i].scores[key] + "</td></tr>";

        }
            document.getElementById("scores").innerHTML = course_scores;
        }
    }
    
}

