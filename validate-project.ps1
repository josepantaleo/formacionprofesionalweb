$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$scripts = @(
  "actividad-app.js",
  "actividad-firebase.js",
  "actividad-pdf-loader.js",
  "actividad-utils.js",
  "actividad-network-status.js",
  "codemirror-bundle.js",
  "panel-profesor.js",
  "actividad-cooperacion.js",
  "mejoras-seguimiento.js",
  "button-contract.test.cjs"
)
foreach ($script in $scripts) {
  node --check ".\$script"
  if ($LASTEXITCODE -ne 0) { throw "Sintaxis invalida: $script" }
}

$required = @(
  "actividad.html",
  "actividad-app.js",
  "actividad-base.css",
  "actividad-cooperacion.js",
  "actividad-firebase.js",
  "mejoras-seguimiento.css",
  "mejoras-seguimiento.js",
  "reglas.txt",
  "button-contract.test.cjs"
)
$missing = $required | Where-Object { -not (Test-Path $_) }
if ($missing) { throw "Archivos faltantes: $($missing -join ', ')" }

node ".\ui-contract.test.cjs"
if ($LASTEXITCODE -ne 0) { throw "Fallo el contrato de interfaz." }

node ".\button-contract.test.cjs"
if ($LASTEXITCODE -ne 0) { throw "Fallo el contrato de botones." }

Write-Host "Validacion del proyecto: OK"
