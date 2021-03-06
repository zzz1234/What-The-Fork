$(document).ready(function (){
    $.get(
        "https://raw.githubusercontent.com/Cutwell/What-The-Fork/master/README.md",
        function(file) {
            var wtfork_md = file.split("### Puns")[1].split("\n");
            var pun_list = [];
            wtfork_md.map((contribution) => {
                if(contribution == ""){
                    return;
                }
                var pun = contribution.substring(contribution.lastIndexOf("[")+1, contribution.lastIndexOf("]"));
                var url = contribution.substring(contribution.lastIndexOf("(")+1, contribution.lastIndexOf(")"));
                pun_list.push(["<a href="+url+">"+pun+"</a>"]);
            });
            var pun_count = pun_list.length;
            $("#pun-count").html(pun_count+" Forking Puns:");
            var rand_pun = pun_list[Math.floor(Math.random() * pun_list.length)];
            $(".pun-item").html(rand_pun);
        }
    );
});
