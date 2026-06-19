Attribute VB_Name = "GeneratePVPresentation"
' ==============================================================================
' Module:  GeneratePVPresentation
' Purpose: Automatically generates a 9-slide Microsoft PowerPoint presentation
'          titled "Harvesting the Sun: The Physics and Engineering of
'          Photovoltaic Systems".
'          Target audience: 3rd-year university physics students.
'          All equations are expressed as plain Unicode text (^, /, Greek
'          letters) so the module compiles without any special add-ins.
' Usage:   Open the VBA editor in PowerPoint (Alt+F11), import this module,
'          then run GeneratePVPresentation().
' Author:  Generated for tarikkudesu/tarikkudesu
' Date:    2026-03-07
' ==============================================================================

Option Explicit

' ------------------------------------------------------------------------------
' Entry point
' ------------------------------------------------------------------------------
Public Sub GeneratePVPresentation()

    ' -----------------------------------------------------------------------
    ' Presentation-level constants
    ' -----------------------------------------------------------------------
    Const SLIDE_WIDTH  As Single = 720    ' points  (10 in @ 72 dpi)
    Const SLIDE_HEIGHT As Single = 540    ' points  (7.5 in @ 72 dpi)

    ' Title text-box geometry
    Const TTL_LEFT   As Single = 36
    Const TTL_TOP    As Single = 20
    Const TTL_WIDTH  As Single = 648
    Const TTL_HEIGHT As Single = 70

    ' Body text-box geometry
    Const BOD_LEFT   As Single = 36
    Const BOD_TOP    As Single = 100
    Const BOD_WIDTH  As Single = 648
    Const BOD_HEIGHT As Single = 410

    ' Font sizes
    Const FS_TITLE   As Single = 30
    Const FS_BODY    As Single = 19
    Const FS_SUB     As Single = 22       ' subtitle on slide 1

    ' Colours (BGR hex as Long)
    Const CLR_TITLE  As Long = &H1F3864  ' dark navy
    Const CLR_BODY   As Long = &H222222  ' near-black
    Const CLR_BG     As Long = &HFFFFFF  ' white

    ' -----------------------------------------------------------------------
    ' Create a brand-new presentation
    ' -----------------------------------------------------------------------
    Dim oPres As Presentation
    Set oPres = Presentations.Add(WithWindow:=msoTrue)

    ' Set slide dimensions (standard 4:3 aspect ratio)
    With oPres.PageSetup
        .SlideWidth  = SLIDE_WIDTH
        .SlideHeight = SLIDE_HEIGHT
    End With

    ' -----------------------------------------------------------------------
    ' Helper references (declared once, reused per slide)
    ' -----------------------------------------------------------------------
    Dim oSlide  As Slide
    Dim oShape  As Shape
    Dim oTF     As TextFrame
    Dim oPara   As TextRange

    ' ===================================================================
    ' SLIDE 1 – Title Slide
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    ' Title
    AddTitleBox oSlide, _
        "Harvesting the Sun:" & Chr(13) & _
        "The Physics and Engineering of Photovoltaic Systems", _
        TTL_LEFT, 30, TTL_WIDTH, 120, FS_TITLE, CLR_TITLE

    ' Subtitle
    AddBodyBox oSlide, _
        "Part 1 & 2: Solar Resource and Semiconductor Physics", _
        TTL_LEFT, 170, TTL_WIDTH, 60, FS_SUB, CLR_BODY, False

    ' ===================================================================
    ' SLIDE 2 – The Solar Resource: Black Body Physics
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    AddTitleBox oSlide, _
        "The Solar Resource " & Chr(8211) & " Black Body Physics", _
        TTL_LEFT, TTL_TOP, TTL_WIDTH, TTL_HEIGHT, FS_TITLE, CLR_TITLE

    Dim s2 As String
    s2 = Chr(9679) & "  The sun approximates a black body at T " & Chr(8776) & " 5778 K." & Chr(13) & _
         Chr(9679) & "  Spectral radiance is governed by Planck's Law:" & Chr(13) & _
         "     B(" & Chr(955) & ",T) = (2hc" & Chr(178) & " / " & Chr(955) & Chr(8309) & ") " & Chr(215) & _
         " [1 / (e^(hc / " & Chr(955) & "k" & Chr(8347) & "T) " & Chr(8722) & " 1)]" & Chr(13) & _
         Chr(9679) & "  Total emitted power per unit area " & Chr(8212) & " Stefan-Boltzmann Law:" & Chr(13) & _
         "     j* = " & Chr(963) & "T" & Chr(8308) & Chr(13) & _
         Chr(9679) & "  Solar Constant S" & Chr(8320) & " " & Chr(8776) & " 1361 W/m" & Chr(178) & _
         " (top of Earth's atmosphere)."
    AddBodyBox oSlide, s2, BOD_LEFT, BOD_TOP, BOD_WIDTH, BOD_HEIGHT, FS_BODY, CLR_BODY, True

    ' ===================================================================
    ' SLIDE 3 – Atmospheric Attenuation & Air Mass
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    AddTitleBox oSlide, _
        "Atmospheric Attenuation & Air Mass", _
        TTL_LEFT, TTL_TOP, TTL_WIDTH, TTL_HEIGHT, FS_TITLE, CLR_TITLE

    Dim s3 As String
    s3 = Chr(9679) & "  As light passes through the atmosphere it undergoes Rayleigh" & Chr(13) & _
         "     scattering and absorption (O" & Chr(8323) & ", H" & Chr(8322) & "O, CO" & Chr(8322) & ")." & Chr(13) & _
         Chr(9679) & "  Air Mass (AM) quantifies the optical path length:" & Chr(13) & _
         "     AM " & Chr(8776) & " 1 / cos(" & Chr(952) & Chr(8348) & ")" & Chr(13) & _
         Chr(9679) & "  AM1.5 is the standard for terrestrial PV testing." & Chr(13) & _
         Chr(9679) & "  Example: AM1.5 requires zenith angle " & Chr(952) & Chr(8348) & " = arccos(1/1.5)" & Chr(13) & _
         "     " & Chr(952) & Chr(8348) & " " & Chr(8776) & " 48.2" & Chr(176) & "."
    AddBodyBox oSlide, s3, BOD_LEFT, BOD_TOP, BOD_WIDTH, BOD_HEIGHT, FS_BODY, CLR_BODY, True

    ' ===================================================================
    ' SLIDE 4 – Solar Geometry & The Cosine Law
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    AddTitleBox oSlide, _
        "Solar Geometry & The Cosine Law", _
        TTL_LEFT, TTL_TOP, TTL_WIDTH, TTL_HEIGHT, FS_TITLE, CLR_TITLE

    Dim s4 As String
    s4 = Chr(9679) & "  Irradiance on a surface depends heavily on the angle of incidence." & Chr(13) & _
         Chr(9679) & "  Cooper's formula for the declination angle (" & Chr(948) & "):" & Chr(13) & _
         "     " & Chr(948) & " = 23.45" & Chr(176) & " " & Chr(215) & " sin[ (360/365) " & Chr(215) & " (d " & Chr(8722) & " 81) ]  (argument in degrees)" & Chr(13) & _
         "     where d is the day of the year." & Chr(13) & _
         Chr(9679) & "  Lambert's Cosine Law:" & Chr(13) & _
         "     I_incident = I_normal " & Chr(215) & " cos(" & Chr(952) & ")" & Chr(13) & _
         Chr(9679) & "  Pyranometers measure GHI; Pyrheliometers measure DNI."
    AddBodyBox oSlide, s4, BOD_LEFT, BOD_TOP, BOD_WIDTH, BOD_HEIGHT, FS_BODY, CLR_BODY, True

    ' ===================================================================
    ' SLIDE 5 – Semiconductor Physics: The Bandgap
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    AddTitleBox oSlide, _
        "Semiconductor Physics " & Chr(8211) & " The Bandgap", _
        TTL_LEFT, TTL_TOP, TTL_WIDTH, TTL_HEIGHT, FS_TITLE, CLR_TITLE

    Dim s5 As String
    s5 = Chr(9679) & "  Photons must have energy E " & Chr(8805) & " E_g (bandgap) to excite an electron" & Chr(13) & _
         "     from the valence to the conduction band." & Chr(13) & _
         Chr(9679) & "  Photon Energy Equation:" & Chr(13) & _
         "     E = hc / " & Chr(955) & Chr(13) & _
         Chr(9679) & "  Silicon bandgap: E_g = 1.12 eV." & Chr(13) & _
         Chr(9679) & "  Maximum wavelength for an electron-hole pair:" & Chr(13) & _
         "     " & Chr(955) & "_max = hc / E_g = (1240 eV" & Chr(183) & "nm) / 1.12 eV " & Chr(8776) & " 1107 nm (Infrared)." & Chr(13) & _
         "     Photons with " & Chr(955) & " > 1107 nm pass right through."
    AddBodyBox oSlide, s5, BOD_LEFT, BOD_TOP, BOD_WIDTH, BOD_HEIGHT, FS_BODY, CLR_BODY, True

    ' ===================================================================
    ' SLIDE 6 – The P-N Junction & Built-in Potential
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    AddTitleBox oSlide, _
        "The P-N Junction & Built-in Potential", _
        TTL_LEFT, TTL_TOP, TTL_WIDTH, TTL_HEIGHT, FS_TITLE, CLR_TITLE

    Dim s6 As String
    s6 = Chr(9679) & "  Doping silicon creates a P-N junction, forming a depletion region" & Chr(13) & _
         "     and a built-in electric field." & Chr(13) & _
         Chr(9679) & "  Built-in Potential Equation:" & Chr(13) & _
         "     V_bi = (k" & Chr(8347) & "T / q) " & Chr(215) & " ln( (N_A " & Chr(215) & " N_D) / n_i" & Chr(178) & " )" & Chr(13) & _
         Chr(9679) & "  N_A and N_D are the acceptor / donor doping concentrations;" & Chr(13) & _
         "     n_i is the intrinsic carrier concentration." & Chr(13) & _
         Chr(9679) & "  The internal field separates photo-generated electron-hole pairs," & Chr(13) & _
         "     preventing recombination and driving the photocurrent."
    AddBodyBox oSlide, s6, BOD_LEFT, BOD_TOP, BOD_WIDTH, BOD_HEIGHT, FS_BODY, CLR_BODY, True

    ' ===================================================================
    ' SLIDE 7 – PV Cell I-V Characteristics
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    AddTitleBox oSlide, _
        "PV Cell I-V Characteristics", _
        TTL_LEFT, TTL_TOP, TTL_WIDTH, TTL_HEIGHT, FS_TITLE, CLR_TITLE

    Dim s7 As String
    s7 = Chr(9679) & "  A solar cell is modelled as a current source in parallel with a diode." & Chr(13) & _
         Chr(9679) & "  Ideal Diode Equation with Photocurrent:" & Chr(13) & _
         "     I = I_ph " & Chr(8722) & " I_0 " & Chr(215) & " [ e^(qV / nk" & Chr(8347) & "T) " & Chr(8722) & " 1 ]" & Chr(13) & _
         Chr(9679) & "  Short-Circuit Current (I_sc):" & Chr(13) & _
         "     Maximum current when V = 0; I_sc " & Chr(8776) & " I_ph." & Chr(13) & _
         Chr(9679) & "  Open-Circuit Voltage (V_oc):" & Chr(13) & _
         "     Maximum voltage when I = 0." & Chr(13) & _
         "     V_oc = (nk" & Chr(8347) & "T / q) " & Chr(215) & " ln( (I_ph / I_0) + 1 )"
    AddBodyBox oSlide, s7, BOD_LEFT, BOD_TOP, BOD_WIDTH, BOD_HEIGHT, FS_BODY, CLR_BODY, True

    ' ===================================================================
    ' SLIDE 8 – The Shockley-Queisser Limit
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    AddTitleBox oSlide, _
        "The Shockley-Queisser Limit", _
        TTL_LEFT, TTL_TOP, TTL_WIDTH, TTL_HEIGHT, FS_TITLE, CLR_TITLE

    Dim s8 As String
    s8 = Chr(9679) & "  Theoretical maximum efficiency for a single p-n junction cell" & Chr(13) & _
         "     is " & Chr(8776) & " 33.7%." & Chr(13) & _
         Chr(9679) & "  Loss Mechanism 1 " & Chr(8212) & " Sub-bandgap losses:" & Chr(13) & _
         "     Photons with E < E_g are not absorbed." & Chr(13) & _
         Chr(9679) & "  Loss Mechanism 2 " & Chr(8212) & " Thermalisation:" & Chr(13) & _
         "     Photons with E > E_g lose excess energy as heat / phonons." & Chr(13) & _
         Chr(9679) & "  Loss Mechanism 3 " & Chr(8212) & " Radiative recombination:" & Chr(13) & _
         "     Detailed balance requires a solar cell to also emit light."
    AddBodyBox oSlide, s8, BOD_LEFT, BOD_TOP, BOD_WIDTH, BOD_HEIGHT, FS_BODY, CLR_BODY, True

    ' ===================================================================
    ' SLIDE 9 – Cell Technologies: Physics & Structure
    ' ===================================================================
    Set oSlide = AddBlankSlide(oPres, CLR_BG)

    AddTitleBox oSlide, _
        "Cell Technologies: Physics & Structure", _
        TTL_LEFT, TTL_TOP, TTL_WIDTH, TTL_HEIGHT, FS_TITLE, CLR_TITLE

    Dim s9 As String
    s9 = Chr(9679) & "  Monocrystalline Si:" & Chr(13) & _
         "     Continuous crystal lattice, high carrier mobility," & Chr(13) & _
         "     efficiencies " & Chr(8776) & " 20-24%." & Chr(13) & _
         Chr(9679) & "  Polycrystalline Si:" & Chr(13) & _
         "     Multiple grains. Grain boundaries act as recombination centres," & Chr(13) & _
         "     lowering efficiency to " & Chr(8776) & " 15-18%." & Chr(13) & _
         Chr(9679) & "  Thin-Film (CdTe, CIGS):" & Chr(13) & _
         "     Direct bandgap materials with higher absorption coefficients." & Chr(13) & _
         "     Active layers only a few micrometres thick."
    AddBodyBox oSlide, s9, BOD_LEFT, BOD_TOP, BOD_WIDTH, BOD_HEIGHT, FS_BODY, CLR_BODY, True

    ' -----------------------------------------------------------------------
    ' Finished – show a confirmation to the user
    ' -----------------------------------------------------------------------
    MsgBox "Presentation created successfully!" & Chr(13) & _
           "9 slides generated for:" & Chr(13) & _
           Chr(34) & "Harvesting the Sun: The Physics and Engineering" & Chr(13) & _
           "of Photovoltaic Systems" & Chr(34), _
           vbInformation, "GeneratePVPresentation"

End Sub

' ==============================================================================
' Helper: AddBlankSlide
' Appends a new slide with a solid white (or specified) background and returns
' a reference to it.
' ==============================================================================
Private Function AddBlankSlide(oPres As Presentation, _
                                ByVal bgColour As Long) As Slide

    Dim oSlide As Slide

    ' ppLayoutBlank = 12  — no placeholders, giving us full layout control
    Set oSlide = oPres.Slides.Add(oPres.Slides.Count + 1, ppLayoutBlank)

    ' Set solid background colour
    With oSlide.Background.Fill
        .Visible    = msoTrue
        .ForeColor.RGB = bgColour
        .BackColor.RGB = bgColour
        .Solid
    End With

    Set AddBlankSlide = oSlide

End Function

' ==============================================================================
' Helper: AddTitleBox
' Adds a formatted title text box to the given slide.
' ==============================================================================
Private Sub AddTitleBox(oSlide As Slide, _
                         ByVal titleText As String, _
                         ByVal boxLeft   As Single, _
                         ByVal boxTop    As Single, _
                         ByVal boxWidth  As Single, _
                         ByVal boxHeight As Single, _
                         ByVal fontSize  As Single, _
                         ByVal fontColour As Long)

    Dim oShape As Shape
    Dim oTF    As TextFrame

    ' Add a text box with the specified position and dimensions
    Set oShape = oSlide.Shapes.AddTextbox( _
                     msoTextOrientationHorizontal, _
                     boxLeft, boxTop, boxWidth, boxHeight)

    With oShape
        .Line.Visible = msoFalse   ' no border
    End With

    Set oTF = oShape.TextFrame
    With oTF
        .AutoSize         = ppAutoSizeNone
        .WordWrap         = True
        .TextRange.Text   = titleText
    End With

    ' Apply font formatting to the entire text range
    With oTF.TextRange.Font
        .Name  = "Calibri"
        .Size  = fontSize
        .Bold  = msoTrue
        .Color.RGB = fontColour
    End With

    ' Paragraph alignment
    Dim i As Integer
    For i = 1 To oTF.TextRange.Paragraphs.Count
        oTF.TextRange.Paragraphs(i).ParagraphFormat.Alignment = ppAlignLeft
    Next i

End Sub

' ==============================================================================
' Helper: AddBodyBox
' Adds a formatted body / bullet text box to the given slide.
' Pass isBullet = True to use a slightly indented, line-spaced style.
' ==============================================================================
Private Sub AddBodyBox(oSlide As Slide, _
                        ByVal bodyText   As String, _
                        ByVal boxLeft    As Single, _
                        ByVal boxTop     As Single, _
                        ByVal boxWidth   As Single, _
                        ByVal boxHeight  As Single, _
                        ByVal fontSize   As Single, _
                        ByVal fontColour As Long, _
                        ByVal isBullet   As Boolean)

    Dim oShape As Shape
    Dim oTF    As TextFrame

    Set oShape = oSlide.Shapes.AddTextbox( _
                     msoTextOrientationHorizontal, _
                     boxLeft, boxTop, boxWidth, boxHeight)

    With oShape
        .Line.Visible = msoFalse
    End With

    Set oTF = oShape.TextFrame
    With oTF
        .AutoSize       = ppAutoSizeNone
        .WordWrap       = True
        .TextRange.Text = bodyText
    End With

    ' Apply font formatting
    With oTF.TextRange.Font
        .Name      = "Calibri"
        .Size      = fontSize
        .Bold      = msoFalse
        .Color.RGB = fontColour
    End With

    ' Apply paragraph-level spacing for readability
    Dim i As Integer
    For i = 1 To oTF.TextRange.Paragraphs.Count
        With oTF.TextRange.Paragraphs(i).ParagraphFormat
            .Alignment   = ppAlignLeft
            If isBullet Then
                .SpaceBefore = 6    ' 6pt gap above each paragraph
                .SpaceAfter  = 2
            End If
        End With
    Next i

End Sub
