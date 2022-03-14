$path = $args[0]

if (-Not (Test-Path $path)) {
    Write-Error("$path is not a valid path")
    exit
}

$img_dir = "src/com.thibault.p0.sdPlugin/img"

$base_name = [System.IO.Path]::GetFileNameWithoutExtension($path)

New-Item -ItemType Directory -Force -Path "$img_dir/$base_name"

$action_path =  "$img_dir/$base_name/action.png"
$action_pathx2 =  "$img_dir/$base_name/action@2x.png"
$state_path =  "$img_dir/$base_name/state.png"
$state_pathx2 =  "$img_dir/$base_name/state@2x.png"

cp $path $action_path
cp $path $action_pathx2
cp $path $state_path
cp $path $state_pathx2

magick mogrify -resize 20x20 -monochrome $action_path
magick mogrify -resize 40x40 -monochrome $action_pathx2
magick mogrify -resize 72x72 $state_path
magick mogrify -resize 144x144 $state_pathx2

#rm $path

Write-Host "icons generated"