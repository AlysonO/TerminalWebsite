$("body").terminal(
  {
    //HELP
    help: function (...args) {
      if (args.length != 0) {
        this.error("invalid syntax");
        return;
      }

      this.echo(
        "[[b;; ]Available commands]\n[[b;purple; ]man]\n   followed by the name of a command displays its manual\n[[b;purple; ]alyso.kinda]\n   a quick presentation of myself\n[[b;purple; ]cv]\n   will redirect you to the pdf version of my cv\n[[b;purple; ]mail]\n   will open your default mail app to send me an email\n[[b;purple; ]projects]\n   will display all my projects\n[[b;purple; ]socials]\n   will display all my social media links",
        { typing: true, delay: 0 }
      );
    },
    //MAN
    man: function (...args) {
      const maxNumberOfAcceptedArguments = 1;
      if (args.length == 0) {
        this.error("invalid syntax. option required.");
        return;
      }
      if (args.length > maxNumberOfAcceptedArguments) {
        this.error("invalid number of arguments");
        return;
      }
      switch (args[0]) {
        case "alyso.kinda":
          this.echo("a quick presentation of myself");
          break;
        case "cv":
          this.echo("will redirect you to the pdf version of my cv");
          break;
        case "mail":
          this.echo("will open your default mail app to send me an email");
          break;
        case "projects":
          this.echo(
            "will display all my projects\n     [[b;;]-py] : will list only my python projects\n     [[b;;]-ga] : will list my game related projects\n     [[b;;]-wb] : will list my web development related projects"
          );
          break;
        case "socials":
          this.echo(
            "will display all my social media links\n     [[b;;]-gh] : will redirect you to my github profile\n     [[b;;]-io] : will redirect you to my itch.io profile\n     [[b;;]-fb] : will redirect you to my facebook profile\n     [[b;;]-lk] : redirect you to my linkedin profile"
          );
          break;
        //case "credits":
          //this.echo("who i took inspiration from for this website");
          //break;
        default:
          this.error("invalid argument");
      }
    },
    //WHO AM I
    "alyso.kinda": function (...args) {
      this.echo(
        "Hello. My name is Alyson Okinda and I am currently a student at the Université Catholique de Lille. I currently study Computer Sciences. "
      );
    },
    //CV PDF
    cv: function (...args) {
      if (args.length != 0) {
        this.error("invalid syntax");
        return;
      }
      this.echo("opening my cv...", { typing: true, delay: 150 });
      window.setTimeout('window.open("Alyson_Okinda_CV.pdf")', 3000);
    },
    //CONTACT ME VIA MAIL
    mail: function (...args) {
      if (args.length != 0) {
        this.error("invalid syntax");
        return;
      }
      this.echo("i look forward to hearing from you", {
        typing: true,
        delay: 100,
      });
      window.setTimeout(
        'window.location.href = "mailto:alysonokinda@gmail.com"',
        3500
      );
    },
    //SHOW MY PROJECTS
    projects: function (...args) {
      const maxNumberOfAcceptedArguments = 1;
      if (args.length == 0) {
        this.echo(
          "[[b;;]All my projects :]\n" + python + "\n" + game + "\n" + web
        );
        return;
      }
      if (args.length > maxNumberOfAcceptedArguments) {
        this.error("invalid number of arguments");
        return;
      }
      switch (args[0]) {
        case "-py":
          this.echo(python);
          break;
        case "-ga":
          this.echo(game);
          break;
        case "-wb":
          this.echo(web);
          break;
        default:
          this.error("invalid argument");
      }
    },
    //SOCIALS LINKS
    socials: function (...args) {
      const maxNumberOfAcceptedArguments = 1;
      if (args.length == 0) {
        this.echo(
          "[[b;;]All my socials :]\n" +
            github +
            "\n" +
            itch +
            "\n" +
            facebook +
            "\n" +
            linkedin
        );
        return;
      }
      if (args.length > maxNumberOfAcceptedArguments) {
        this.error("invalid number of arguments");
        return;
      }
      switch (args[0]) {
        case "-gh":
          this.echo("opening github...", { typing: true, delay: 150 });
          window.setTimeout('window.open("https://github.com/AlysonO/")', 3000);
          break;
        case "-io":
          this.echo("opening itch.io...", { typing: true, delay: 150 });
          window.setTimeout('window.open("https://alysono.itch.io/")', 3000);
          break;
        case "-fb":
          this.echo("opening facebook...", { typing: true, delay: 150 });
          window.setTimeout(
            'window.open("https://www.facebook.com/alyson.okinda.7")',
            3000
          );
          break;
        case "-lk":
          this.echo("opening linkedin...", { typing: true, delay: 150 });
          window.setTimeout(
            'window.open("https://www.linkedin.com/in/alyson-okinda-893a63226/")',
            3000
          );
          break;
        default:
          this.error("invalid argument");
      }
    },
    //CREDITS
    //credits: function (...args) {
      //if (args.length != 0) {
        //this.error("invalid syntax");
        //return;
      //}
      //this.echo("inspirations");
    //},
  },
  {
    checkArity: false,
    completion: true,
    greetings:
      "Hello people ! Welcome to my website ! It is still a work in progress. Enjoy your time here! \nType 'help' to show all the available commands!",
    prompt: "[[b;purple;]visitor@alyso.kinda:$ ~ ]",
  }
);

var python =
  "My python projects : \n - an asteroid-like game with the Pygame module";

var game =
  "My game related projects :\n - a tabletop game during a group project\n - an Alice in Wonderland themed escape game during a group project (the text-based version can be found on my itch.io";

var web =
  "My web development projects :\n - a static cv website : [[!;;]https://alysono.github.io/PersonalWebsite/]\n - some of the rest can/will be found on my github";

var github =
  " - Not much to see on my github : [[!;;]https://github.com/AlysonO/]";

var itch =
  " - I like games a lot so i also have a itch.io : [[!;;]https://alysono.itch.io/]";

var facebook =
  " - I don't like this one much : [[!;;]https://www.facebook.com/alyson.okinda.7]";

var linkedin =
  " - I do have to network : [[!;;]https://www.linkedin.com/in/alyson-okinda-893a63226/]";
