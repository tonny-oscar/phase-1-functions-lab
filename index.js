const hqlocation=42;
function distanceFromHqInBlocks(street){
    let blocksFromHq=street-hqlocation;
    return Math.abs(blocksFromHq);

}
function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street)*264
}
function distanceTravelledInFeet(start,destination){
    return Math.abs(destination-start)*264
}
function calculatesFarePrice(start,destination)
{let totalFeet=distanceTravelledInFeet(start,destination);
    if(totalFeet<=400){
        return 0
    }else if(totalFeet>=400 && totalFeet<=2000){
        return (totalFeet-400) *0.02
    }else if (totalFeet>2000 && totalFeet<=2500){
        
    return 25
    }

        
    else if(totalFeet>2500){
        return 'cannot travel that far';

    }
}