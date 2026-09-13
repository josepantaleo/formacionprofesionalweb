$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$scripts = @(
  "actividad-app.js",
  "actividad-firebase.js",
  "actividad-pdf-loader.js",
  "actividad-utils.js",
  "actividad-network-status.js",
  "actividad-cooperacion.js",
  "mejoras-seguimiento.js"
)
foreach ($script in $scripts) {
  node --check ".\$script"
  if ($LASTEXITCODE -ne 0) { throw "Sintaxis inválida: $script" }
}

$required = @(
  "actividad.html",
  "actividad-app.js",
  "actividad-base.css",
  "actividad-cooperacion.js",
  "actividad-firebase.js",
  "mejoras-seguimiento.css",
  "mejoras-seguimiento.js",
  "reglas.txt"
)
$missing = $required | Where-Object { -not (Test-Path $_) }
if ($missing) { throw "Archivos faltantes: $($missing -join ', ')" }

node ".\ui-contract.test.cjs"
if ($LASTEXITCODE -ne 0) { throw "Falló el contrato de interfaz." }

Write-Host "Validación del proyecto: OK"
