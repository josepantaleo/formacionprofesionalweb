param(
    [string]$HtmlPath = (Join-Path $PSScriptRoot "actividad.html")
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $HtmlPath)) {
    throw "No se encontro el archivo HTML: $HtmlPath"
}

$contenido = Get-Content -LiteralPath $HtmlPath -Raw -Encoding UTF8
$coincidencia = [regex]::Match($contenido, 'actividad-app\.js\?v=(?<version>\d{8})-(?<contador>\d+)')
$hoy = Get-Date -Format "yyyyMMdd"

if ($coincidencia.Success -and [int64]$coincidencia.Groups["version"].Value -ge [int64]$hoy) {
    $hoy = $coincidencia.Groups["version"].Value
    $contador = [int]$coincidencia.Groups["contador"].Value + 1
} else {
    $contador = 1
}

$version = "$hoy-$contador"
$archivosVersionados = @(
    "actividad-base.css",
    "mejoras-seguimiento.css",
    "actividad-firebase.js",
    "actividad-app.js",
    "mejoras-seguimiento.js"
)

foreach ($archivo in $archivosVersionados) {
    $nombre = [regex]::Escape($archivo)
    $contenido = [regex]::Replace(
        $contenido,
        "($nombre)\?v=[^""'\s>]+",
        "`$1?v=$version"
    )
}

Set-Content -LiteralPath $HtmlPath -Value $contenido -Encoding UTF8
Write-Output "Version publicada: $version"
Write-Output "Archivo actualizado: $HtmlPath"
