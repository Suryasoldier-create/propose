document.getElementById('revealButton').addEventListener('click',function(){
    document.getElementById('messsage').classList.remove('hidden');
    document.getElementById('revealButton').classList.add('hidden');
    document.getElementById('Proposal').classList.remove('hidden');   
});
document.getElementById('yesButton').addEventListener('click',function() {
    document.getElementById('response').innerHTML="<h2>Yay!I'm so happy!</h2>";
    document.getElementById('reponse').classList.remove('hidden');
    document.getElementById('message').classList.add('hidden');
});
document.getElementById('noButton').addEventListener('click',function(){
    document.getElementById('response').innerHTML="<h2>Oh no! Maybe another time?</h2>";
    document.getElementById('reponse').classList.remove('hidden');
    document.getElementById('message').classList.add('hidden');
});
