let colors = ["yellow","blue","red","orange"]
i = 0
while(colors[i])
{
    console.log(colors[i]);
    i++
}

for(i = 0; i < colors.length;i++)
{
    console.log(colors[i]);
}

colors.forEach(x => {
    console.log(x); 
});