<?php
$mongo = new MongoClient();
$db=$mongo->catadopt;
$collection=$mongo->details;

if ($_Post)
{$insert=array ( 
'name'=>$_Post['name'],
'ead'=>$_Post['ead'],
'crit'=>$_Post['crit'],
);

if($collection->insert($insert))
{echo "data is inserted"}
else
{
    echo"some issue"
}

}
?>