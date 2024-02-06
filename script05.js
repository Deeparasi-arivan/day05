//

{
    "basics": {
      "name": "John Doe",
      "label": "Programmer",
      "image": "",
      "email": "john@gmail.com",
      "phone": "(912) 555-4321",
      "url": "https://johndoe.com",
      "summary": "A summary of John Doe…",
      "location": {
        "address": "2712 Broadway St",
        "postalCode": "CA 94115",
        "city": "San Francisco",
        "countryCode": "US",
        "region": "California"
      },
      "profiles": [{
        "network": "Twitter",
        "username": "john",
        "url": "https://twitter.com/john"
      }]
    },
    "work": [{
      "name": "Company",
      "position": "President",
      "url": "https://company.com",
      "startDate": "2013-01-01",
      "endDate": "2014-01-01",
      "summary": "Description…",
      "highlights": [
        "Started the company"
      ]
    }],
    "volunteer": [{
      "organization": "Organization",
      "position": "Volunteer",
      "url": "https://organization.com/",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Description…",
      "highlights": [
        "Awarded 'Volunteer of the Month'"
      ]
    }],
    "education": [{
      "institution": "University",
      "url": "https://institution.com/",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01",
      "score": "4.0",
      "courses": [
        "DB1101 - Basic SQL"
      ]
    }],
    "awards": [{
      "title": "Award",
      "date": "2014-11-01",
      "awarder": "Company",
      "summary": "There is no spoon."
    }],
    "certificates": [{
      "name": "Certificate",
      "date": "2021-11-07",
      "issuer": "Company",
      "url": "https://certificate.com"
    }],
    "publications": [{
      "name": "Publication",
      "publisher": "Company",
      "releaseDate": "2014-10-01",
      "url": "https://publication.com",
      "summary": "Description…"
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }],
    "languages": [{
      "language": "English",
      "fluency": "Native speaker"
    }],
    "interests": [{
      "name": "Wildlife",
      "keywords": [
        "Ferrets",
        "Unicorns"
      ]
    }],
    "references": [{
      "name": "Jane Doe",
      "reference": "Reference…"
    }],
    "projects": [{
      "name": "Project",
      "startDate": "2019-01-01",
      "endDate": "2021-01-01",
      "description": "Description...",
      "highlights": [
        "Won award at AIHacks 2016"
      ],
      "url": "https://project.com/"
    }]
  }
  //2. for the above JSON ,iterate over all for loops(for,for in ,for of,for  each)
  //for loop:\par
\ulnone\fs22 var mark=[80,95,98,78,75];\par
for(var i=0;i<5;i++)\{\par
    console.log(mark[i]);\par
\}\f1\par
\f0\par
\ul\fs28 for in loop:\par
\ulnone\fs22 var bike = \{"name":"royal enfield","model":2020\}\par
for(var i in bike)\{\par
    console.log(i,bike[i]);\par
\}\par
\par
\ul\fs28 for of loop:\par
\ulnone\fs22 var exammark=[20,40,60,80,90];\par
for(var i of exammark)\{\par
    console.log(i);\par
\ul\}\par
\par
\fs28 for each loop:\par
\ulnone\fs22 var test=[11,22,33,44,55,66,77,88,99];\par
test.foreach(function(value,index)\{\par
    console.log(value,index);\par
\})\par

\pard\sa200\sl276\slmult1\b0\f2\par
}

